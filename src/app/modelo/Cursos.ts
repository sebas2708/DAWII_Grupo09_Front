import { Alumnos } from "./Alumnos";

export interface Cursos {
    id:number;
    descripcion: string;
    seleccionado: boolean;
   // alumnosDTO: Alumnos[]; // Opcional, dependiendo de si necesitas esta relación en el frontend
  }