import { IsOptional, IsString, IsIn } from 'class-validator';
export class CreateJobDto {
  title: string;
  description?: string;
  organization_id: number;
  created_by: number;
}
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
}
