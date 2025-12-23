import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { User } from '../../users/users.entity';

@Entity('job_history')
export class JobHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, job => job.history, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'performed_by' })
  performed_by: User;

  @Column({ length: 255 })
  action: string;

  @Column({ type: 'varchar', length: 30 })
  new_status: string;

  @CreateDateColumn()
  created_at: Date;
}
