import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';
import { JobHistory } from './job-history.entity';
import { Organization } from '../../organizations/entities/organization.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 30 })
  status: string;

  // ───────── Organization ─────────
  @ManyToOne(() => Organization, organization => organization.jobs)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  // ───────── Created by ─────────
  @ManyToOne(() => User, user => user.created_jobs)
  @JoinColumn({ name: 'created_by' })
  created_by: User;

  // ───────── Assigned to ─────────
  @ManyToOne(() => User, user => user.assigned_jobs, { nullable: true })
  @JoinColumn({ name: 'assigned_to' })
  assigned_to: User;

  // ───────── History ─────────
  @OneToMany(() => JobHistory, history => history.job)
  history: JobHistory[];

  @CreateDateColumn()
  created_at: Date;
}
