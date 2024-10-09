import { Mascota } from "../mascota/mascota";

export interface Cliente{
    id:number;
    nombre:string;
    correo:string;
    cedula:number;
    celular:number;
    password:string;
    mascotas?:Mascota[];
}