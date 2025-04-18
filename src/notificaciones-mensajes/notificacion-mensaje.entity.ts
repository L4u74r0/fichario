import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Mensaje } from '../mensajes/mensaje.entity';

@Entity('notificaciones_mensajes')
export class NotificacionMensaje {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'usuario_id' })
    usuarioId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ name: 'mensaje_id' })
    mensajeId: number;

    @ManyToOne(() => Mensaje)
    @JoinColumn({ name: 'mensaje_id' })
    mensaje: Mensaje;

    @CreateDateColumn({ 
        name: 'fecha',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fecha: Date;

    @Column({ 
        name: 'leido',
        type: 'boolean',
        default: false
    })
    leido: boolean;

    @Column({ 
        name: 'fecha_lectura',
        type: 'timestamp without time zone',
        nullable: true
    })
    fecha_lectura: Date;
} 