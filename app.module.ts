import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { FichasTecnicasModule } from 'src/fichas-tecnicas/fichas-tecnicas.module';
import { MensajesModule } from 'src/mensajes/mensajes.module';
import { NotificacionesMensajesModule } from 'src/notificaciones-mensajes/notificaciones-mensajes.module';
import { NotificacionesTrabajosModule } from 'src/notificaciones-trabajos/notificaciones-trabajos.module';
import { PrendasModule } from 'src/prendas/prendas.module';
import { ProduccionModule } from 'src/produccion/produccion.module';
import { AuthModule } from 'src/auth/auth.module';

import { Usuario } from 'src/usuarios/usuario.entity';
import { FichaTecnica } from 'src/fichas-tecnicas/ficha-tecnica.entity';
import { Mensaje } from 'src/mensajes/mensaje.entity';
import { NotificacionMensaje } from 'src/notificaciones-mensajes/notificacion-mensaje.entity';
import { NotificacionTrabajo } from 'src/notificaciones-trabajos/notificacion-trabajo.entity';
import { Prenda } from 'src/prendas/prenda.entity';
import { Produccion } from 'src/produccion/produccion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',               // 👈 SQL Server
      host: 'localhost',
      port: 1433,                  // Puerto por defecto de SQL Server
      username: 'sa',              // O el usuario que tengas
      password: 'tu_password',
      database: 'fichario',
      entities: [
        Usuario,
        FichaTecnica,
        Mensaje,
        NotificacionMensaje,
        NotificacionTrabajo,
        Prenda,
        Produccion
      ],
      synchronize: true,
      options: {
        encrypt: false,            // true si usás Azure
        trustServerCertificate: true,
      },
    }),
    AuthModule,
    UsuariosModule,
    FichasTecnicasModule,
    MensajesModule,
    NotificacionesMensajesModule,
    NotificacionesTrabajosModule,
    PrendasModule,
    ProduccionModule,
  ],
})
export class AppModule {}
