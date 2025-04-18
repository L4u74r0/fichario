import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('notificaciones_trabajos')
export class NotificacionTrabajo {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'usuario_id' })
    usuarioId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ 
        name: 'tipo',
        type: 'character varying',
        length: 50,
        nullable: false
    })
    tipo: string;

    @Column({ 
        name: 'ficha_numero',
        type: 'integer',
        nullable: false
    })
    fichaNumero: number;

    @Column({ 
        name: 'usuario_nombre',
        type: 'character varying',
        length: 100,
        nullable: false
    })
    usuarioNombre: string;

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