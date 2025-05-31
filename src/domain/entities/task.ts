import { Usuario } from "@prisma/client";
import { Prioridade } from '@prisma/client';

export class Task {
    public id?: number;
    public createdAt?: Date;
    public titulo: string;
    public descricao?: string | null;
    public dataPrevista: Date;
    public prioridade: Prioridade;
    public status: boolean;
    public usuarioId: number;

    constructor(
        titulo: string,
        descricao: string | null,
        dataPrevista: Date,
        prioridade: Prioridade,
        status: boolean,
        usuarioId: number,
        id?: number,
        createdAt?: Date
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataPrevista = dataPrevista;
        this.prioridade = prioridade;
        this.status = status;
        this.usuarioId = usuarioId;

        if (id) this.id = id;
        if (createdAt) this.createdAt = createdAt;
    }
}
