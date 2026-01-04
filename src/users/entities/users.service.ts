import { Injectable, BadRequestException, ForbiddenException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./users.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { roles } from "../../roles/role.entity";
import { OnboardingUserDto, OnboardingType } from '../dto/onboarding-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ,
    @InjectRepository(roles)
    private readonly roleRepository: Repository<roles>,
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
    where: { name: 'PENDING' },
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
      },
    });
  }

  async onboarding(userId: number, dto: OnboardingUserDto) {
  const user = await this.userRepository.findOne({
    where: { id: userId },
    relations: ['role'],
  });

  if (!user) throw new BadRequestException('Usuario no encontrado');

  if (user.role?.name !== 'pending') {
    throw new ForbiddenException('Onboarding ya completado');
  }

  if (dto.type === OnboardingType.OWNER) {
    const adminRole = await this.roleRepository.findOne({
      where: { name: 'admin' },
    });

    user.role = adminRole;
  }

  if (dto.type === OnboardingType.EMPLOYEE) {
    if (!dto.roleName || dto.roleName === 'admin') {
      throw new BadRequestException('Rol inválido');
    }

    const role = await this.roleRepository.findOne({
      where: { name: dto.roleName },
    });

    if (!role) throw new BadRequestException('Rol no existe');

    user.role = role;
  }

  return this.userRepository.save(user);
}
}
