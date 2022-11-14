export interface Calificaciones {
    _id: string;
    nota: number,
    comentario: string
}

export interface Pastel {
    _id: string;
    pastelero: string,
    imagen: string,
    calificaciones: [Calificaciones]
}
