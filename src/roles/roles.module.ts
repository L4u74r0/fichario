import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { roles } from './role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([roles])],
  exports: [TypeOrmModule],
})
export class RolesModule {}
