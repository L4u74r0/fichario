import { Injectable, BadRequestException, ForbiddenException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./users.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { roles } from "../../roles/role.entity";
import { OnboardingUserDto, OnboardingType } from '../dto/onboarding-user.dto';
import { Organization } from "src/organizations/entities/organization.entity";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ,
    @InjectRepository(roles)
    private readonly roleRepository: Repository<roles>
    ,
    @InjectRepository(Organization)
    private readonly organizationsRepository: Repository<Organization>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
  const existingUser = await this.userRepository.findOne({
    where: { email: dto.email },
  });

  if (existingUser) {
    throw new BadRequestException('Email ya registrado');
  }

  const hashedPassword = await bcrypt.hash(dto.password, 10);

  // 👉 buscar rol PENDING
  const pendingRole = await this.roleRepository.findOne({
    where: { name: 'Pending' },
  });

  if (!pendingRole) {
    throw new BadRequestException('Rol PENDING no existe');
  }

  const user = this.userRepository.create({
    name: dto.name,
    email: dto.email,
    password: hashedPassword,
    role: pendingRole, // 🔥 CLAVE
  });

  return this.userRepository.save(user);
}


  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ["id", "name", "email", "created_at"], 
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ["id", "name", "email", "created_at"],
    });

    if (!user) {
      throw new BadRequestException("Usuario no encontrado");
    }

    return user;
  }

  // 🔐 Esto se usará en AUTH
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: {
        role: true,
        organization: true,
      },
    });
  }

  async onboarding(userId: number, dto: OnboardingUserDto) {
  const user = await this.userRepository.findOne({
    where: { id: userId },
    relations: ['role', 'organization'],
  });

  if (!user) {
    throw new BadRequestException('Usuario no encontrado');
  }

  if (user.role.name !== 'Pending') {
    throw new BadRequestException('El usuario ya completó el onboarding');
  }

  // ───────── OWNER ─────────
  if (dto.type === OnboardingType.OWNER) {
    if (!dto.organizationName) {
      throw new BadRequestException('Nombre de organización requerido');
    }

    const adminRole = await this.roleRepository.findOne({
      where: { name: 'Administrador' },
    });

    if (!adminRole) {
      throw new BadRequestException('Rol admin no encontrado');
    }

    const organization = this.organizationsRepository.create({
      name: dto.organizationName,
      industryType: dto.industryType,
    });

    await this.organizationsRepository.save(organization);

    user.role = adminRole;
    user.organization = organization;

    await this.userRepository.save(user);

    return {
      message: 'Onboarding OWNER completado',
      organizationId: organization.id,
    };
  }

  // EMPLOYEE
  // EMPLOYEE
if (dto.type === OnboardingType.EMPLOYEE) {
  if (!dto.organizationId) {
    throw new BadRequestException(
      'Un empleado debe enviar organizationId',
    );
    }

    const organization = await this.organizationsRepository.findOne({
      where: { id: dto.organizationId },
    });

    if (!organization) {
      throw new BadRequestException('Organización no encontrada');
    }

    const employeeRole = await this.roleRepository.findOne({
      where: { name: 'Empleado' },
    });

      user.role = employeeRole;
      user.organization = organization;

      await this.userRepository.save(user);

      return {
        message: 'Onboarding EMPLOYEE completado',
        organizationId: organization.id,
      };
    }

    return this.userRepository.save(user);
  }
}
