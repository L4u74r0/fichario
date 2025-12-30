import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  organization_id: number;
}
