import { Task } from "../../domain/entities/task";
import { ITaskRepository } from "../../domain/repositories/task-repositories";

export class CreateTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(data: Omit<Task, 'usuarioId'>, usuarioId: number): Promise<Task> {
        try {
            const newTask = await this.taskRepository.create({ ...data, usuarioId });

            if (!newTask) {
                throw new Error("Failed to create task");
              }
            
            return newTask
        } catch (error: any) { 
            throw new Error(`Error in create task use case: ${error.message}`);
          } 
    }
}