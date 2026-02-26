import {
  IsEnum, 
  IsOptional,
  IsString,
  IsInt, 
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

export enum OnboardingType {
  OWNER = 'owner',
  EMPLOYEE = 'employee',
}

export class OnboardingUserDto {
  @IsEnum(OnboardingType)
  type: OnboardingType;

  // OWNER
  @ValidateIf(o => o.type === OnboardingType.OWNER)
  @IsString()
  @IsNotEmpty()
  organizationName?: string;
  
  @ValidateIf(o => o.type === OnboardingType.OWNER)
  @IsOptional()
  @IsString()
  industryType?: string;

  // EMPLOYEE
  @ValidateIf(o => o.type === OnboardingType.EMPLOYEE)
  @IsInt()
  organizationId?: number;
}
