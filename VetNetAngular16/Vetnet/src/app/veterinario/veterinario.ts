import { Tratamiento } from "../tratamiento/tratamiento";
export interface Veterinario {
    id: number;
    nombre: string;
    especialidad: string;
    cedula: number;
    num_atenciones: number;
    password: string;
    foto: string;
    tratamientos?: Tratamiento[];
}
