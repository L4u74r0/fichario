import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum OnboardingType {
  OWNER = 'owner',
  EMPLOYEE = 'employee',
}

export class OnboardingUserDto {
  @IsEnum(OnboardingType)
  type: OnboardingType;

  // solo si es empleado
  @IsOptional()
  @IsString()
  roleName?: string; // ejemplo: 'designer', 'production'

  @IsOptional()
  @IsString()
  organizationCode?: string;
}
