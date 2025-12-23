import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Unique,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/users.entity';
import { Organization } from './organization.entity';

@Entity('organization_users')
@Unique(['user_id', 'organization_id'])
export class OrganizationUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  organization_id: number;

  @ManyToOne(() => User, user => user.organizations, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Organization, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @Column({ length: 50 })
  role: string;

  @CreateDateColumn()
  created_at: Date;
}
