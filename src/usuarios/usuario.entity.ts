import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ 
        name: 'nombre',
        type: 'character varying',
        length: 100,
        nullable: false 
    })
    nombre: string;

    @Column({ 
        name: 'email',
        type: 'character varying',
        length: 150,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({ 
        name: 'password',
        type: 'text',
        nullable: false 
    })
    password: string;

    @Column({ 
        name: 'rol',
        type: 'character varying',
        length: 50,
        nullable: false 
    })
    rol: string;

    @CreateDateColumn({ 
        name: 'created_at',
        type: 'timestamp without time zone',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;
} 