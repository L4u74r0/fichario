import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrganizationUser } from './organization-user.entity';
import { Job } from '../../jobs/entities/job.entity';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100 })
  industry_type: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => OrganizationUser, ou => ou.organization)
  users: OrganizationUser[];

  @OneToMany(() => Job, job => job.organization)
  jobs: Job[];
}
