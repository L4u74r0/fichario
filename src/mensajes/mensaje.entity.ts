import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('mensajes')
export class Mensaje {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'remitente_id', nullable: true })
    remitenteId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'remitente_id' })
    remitente: Usuario;

    @Column({ name: 'destinatario_id', nullable: true })
    destinatarioId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'destinatario_id' })
    destinatario: Usuario;

    @Column({ 
        name: 'mensaje',
        type: 'text',
        nullable: false
    })
    mensaje: string;

    @CreateDateColumn({ 
        name: 'fecha_envio',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fechaEnvio: Date;

    @Column({ 
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'pendiente'
    })
    estado: string;

    @Column({ 
        name: 'tipo_consulta',
        type: 'character varying',
        length: 50,
        nullable: false
    })
    tipoConsulta: string;

    @Column({ 
        name: 'respondedido',
        type: 'boolean',
        default: false
    })
    respondedido: boolean;

    @Column({ 
        name: 'respuesta',
        type: 'text',
        nullable: true
    })
    respuesta: string;

    @Column({ 
        name: 'fecha_respuesta',
        type: 'timestamp without time zone',
        nullable: true
    })
    fechaRespuesta: Date;
} 