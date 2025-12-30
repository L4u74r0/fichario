import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { User } from '../../users/entities/users.entity';

@Entity('job_comments')
export class JobComment {
  @PrimaryGeneratedColumn()
  id: number;

  // ──────────────── Columns ────────────────

  @Column({ type: 'nvarchar', length: 'max' })
  message: string;

  @Column({ type: 'datetime2', default: () => 'SYSDATETIME()' })
  created_at: Date;

  // ──────────────── Relations ────────────────

  @ManyToOne(() => Job, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
