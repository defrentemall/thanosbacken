import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'estructura'})

export class altaagentes {
    /*Identificadores de la base de datos*/ 
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'datetime', default: () => 'CURRENT_TIMESTAMP'}) /* con esto toma la fecha actual de alta de la computadora que lo cargo*/ 
    fecha_alta:Date

    /*Tabla de datos de carga */
    @Column({unique:true})
    dni:number

    @Column()
    clave:string

    @Column()
    rol:string

    @Column()
    lider:string

    @Column()
    jefe:string


}