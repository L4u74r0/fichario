import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { FichaTecnica } from '../fichas-tecnicas/ficha-tecnica.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('produccion')
export class Produccion {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'ficha_tecnica_id' })
    fichaTecnicaId: number;

    @ManyToOne(() => FichaTecnica)
    @JoinColumn({ name: 'ficha_tecnica_id' })
    fichaTecnica: FichaTecnica;

    @Column({ name: 'empleado_id' })
    empleadoId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'empleado_id' })
    empleado: Usuario;

    @Column({ 
        name: 'estado',
        type: 'character varying',
        length: 50,
        default: 'esperando'
    })
    estado: string;

    @Column({ 
        name: 'fecha_inicio',
        type: 'timestamp without time zone',
        nullable: true
    })
    fechaInicio: Date;

    @Column({ 
        name: 'fecha_fin',
        type: 'timestamp without time zone',
        nullable: true
    })
    fechaFin: Date;

    @Column({ 
        name: 'notas',
        type: 'text',
        nullable: true
    })
    notas: string;
} 