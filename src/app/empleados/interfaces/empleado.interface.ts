export interface Empleado{
    id?: string;
    nombre: string;
    apellidos: string;
    email: string;
    edad?: number;
    departamento: depto;
    password: string;
    foto: string;
}

export enum depto{
    informatica = "Informatica",
    disenio = "Diseño",
    marketing = "Marketing"
}