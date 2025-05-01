import { Prioridade } from '@prisma/client';
  
export type CreateTaskDTO = {
    titulo: string;
    descricao: string;
    status: boolean
    usuarioId: number;
    dataPrevista: Date;
    prioridade: Prioridade; 
};
  