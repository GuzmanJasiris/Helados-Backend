import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Palettes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    sabor: string;

    @Column()
    imagen: string;

    @Column()
    descripcion: string;

    @Column()
    precio: string;

    
    
}
