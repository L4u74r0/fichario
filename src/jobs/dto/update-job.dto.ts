import { IsOptional, IsString, IsIn, IsNumber } from 'class-validator';

export class UpdateJobDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['created', 'in_progress', 'completed'])
  status?: string;

  @IsOptional()
  @IsNumber()
  assigned_to?: number;
}
