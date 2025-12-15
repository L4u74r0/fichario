import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('fichas_tecnicas')
export class FichaTecnica {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ 
        name: 'cliente',
        type: 'character varying',
        length: 100,
        nullable: false
    })
    cliente: string;

    @Column({ 
        name: 'archivo_pdf',
        type: 'text',
        nullable: true // Permitir valores nulos inicialmente
    })
    archivoPdf: string;

    @Column({ 
        name: 'fecha',
        type: 'timestamp without time zone',
        nullable: false
    })
    fecha: Date;

    @Column({ 
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'pendiente'
    })
    estado: string; // pendiente, diseñando, ingresado, etc.

    @Column({ name: 'usuario_id' })
    usuarioId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @CreateDateColumn({ 
        name: 'created_at',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;
} 