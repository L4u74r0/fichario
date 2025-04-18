import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { FichaTecnica } from '../fichas-tecnicas/ficha-tecnica.entity';

@Entity('prendas')
export class Prenda {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'ficha_tecnica_id' })
    fichaTecnicaId: number;

    @ManyToOne(() => FichaTecnica)
    @JoinColumn({ name: 'ficha_tecnica_id' })
    fichaTecnica: FichaTecnica;

    @Column({ 
        name: 'tipo',
        type: 'character varying',
        length: 50,
        nullable: false
    })
    tipo: string;

    @Column({ 
        name: 'cantidad',
        type: 'integer',
        nullable: false
    })
    cantidad: number;
} 