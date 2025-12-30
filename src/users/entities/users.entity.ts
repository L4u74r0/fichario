import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { OrganizationUser } from '../../organizations/entities/organization-user.entity';
import { Job } from '../../jobs/entities/job.entity';
/* import { JobComment } from '../jobs/entities/job-comment.entity'; */
import { JobHistory } from '../../jobs/entities/job-history.entity';
import { Role } from '../../roles/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; // 🔐 HASHEADA

  @CreateDateColumn()
  created_at: Date;

  // Jobs creados
  @OneToMany(() => Job, (job) => job.created_by)
  created_jobs: Job[];

  // Jobs asignados
  @OneToMany(() => Job, (job) => job.assigned_to)
  assigned_jobs: Job[];

  // Historial realizado
  @OneToMany(() => JobHistory, (history) => history.performed_by)
  history: JobHistory[];

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}