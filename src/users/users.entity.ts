import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrganizationUser } from '../organizations/entities/organization-user.entity';
import { Job } from '../jobs/entities/job.entity';
/* import { JobComment } from '../jobs/entities/job-comment.entity'; */
import { JobHistory } from '../jobs/entities/job-history.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => OrganizationUser, ou => ou.user)
  organizations: OrganizationUser[];

  @OneToMany(() => Job, job => job.created_by)
  createdJobs: Job[];

  @OneToMany(() => Job, job => job.assigned_to)
  assignedJobs: Job[];

/*   @OneToMany(() => JobComment, comment => comment.user)
  comments: JobComment[]; */

  @OneToMany(() => JobHistory, history => history.performed_by)
history: JobHistory[];

}
