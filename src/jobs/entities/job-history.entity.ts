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

  @Column({type: 'varchar', length: 30})
  action: string; // 'created' | 'updated'

  @Column({ type: 'varchar', length: 100, nullable: true })
  previous_status?: string; // 'status', 'assigned_to', etc

  @Column({ type: 'varchar', length: 100, nullable: true })
  new_status?: string; // 'status', 'assigned_to', etc

  @ManyToOne(() => User)
  @JoinColumn({ name: 'changed_by' })
  changedBy: User;

  @CreateDateColumn({name: 'created_at'})
  created_at: Date;
}


