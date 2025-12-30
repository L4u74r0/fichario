import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { User } from '../../users/entities/users.entity';

@Entity('job_history')
export class JobHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, job => job.history, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @Column()
  action: string; // 'created' | 'updated'

  @Column({ nullable: true })
  field: string; // 'status', 'assigned_to', etc

  @Column({ nullable: true })
  old_value: string;

  @Column({ nullable: true })
  new_value: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'performed_by' })
  performed_by: User;

  @Column({ nullable: true })
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}


