export class CreateJobDto {
  title: string;
  description?: string;
  organization_id: number;
  created_by: number;
}
