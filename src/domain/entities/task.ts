import { Usuario } from "@prisma/client";

export class Task {
    public id?: number;
    public createdAt?: Date;
    public usuario?: Usuario;  

    constructor(
        public titulo: string,
        public descricao: string,
        public dataPrevista: string,
        public prioridade: number,
        public status: boolean,
        usuario?: Usuario,  
        id?: number,
        createdAt?: Date
    ) {
        if (id) this.id = id;
        if (createdAt) this.createdAt = createdAt;
        if (usuario) this.usuario = usuario; 
    }
}
