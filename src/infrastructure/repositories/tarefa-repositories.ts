import { PrismaClient } from "@prisma/client";
import { ITaskRepository } from "../../domain/repositories/task-repositories";

const prisma = new PrismaClient();

export class PrismaTaskRepository implements ITaskRepository{

}