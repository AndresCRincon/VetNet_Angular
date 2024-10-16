import { Droga } from "../droga/droga";
import { Mascota } from "../mascota/mascota";
import { Veterinario } from "../veterinario/veterinario";

export interface Tratamiento{
    id:number;
    fecha:string;
    mascota?:Mascota;
    veterinario?:Veterinario;
    droga?:Droga;
}