import { Cliente } from "../cliente/cliente";

export interface Mascota{
    id:number
    nombre:string;
    peso:string;
    raza:string;
    enfermedad:string;
    estado:string,
    edad:number;
    imagen:string;
    cliente?:Cliente;
}