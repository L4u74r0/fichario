import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'fichario_user',
    password: 'Fichario123!',
    database: 'fichario',
    synchronize: false,
    autoLoadEntities: true,
    options: {
      instanceName: 'SQLEXPRESS',
      encrypt: false,
      trustServerCertificate: true,
    },
}),

    OrganizationsModule,
    JobsModule,
  ],
})
export class AppModule {}
