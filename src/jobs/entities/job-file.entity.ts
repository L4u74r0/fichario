import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { User } from '../../users/entities/users.entity';

@Entity('job_files')
export class JobFile {
  @PrimaryGeneratedColumn()
  id: number;

  // ──────────────── Columns ────────────────

  @Column({ type: 'nvarchar', length: 255 })
  file_name: string;

  @Column({ type: 'nvarchar', length: 500 })
  file_url: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  file_type: string | null;

  @Column({ type: 'datetime2', default: () => 'SYSDATETIME()' })
  uploaded_at: Date;

  // ──────────────── Relations ────────────────

  @ManyToOne(() => Job, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'job_id' })
  job: Job;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'uploaded_by' })
  uploaded_by: User;
}
