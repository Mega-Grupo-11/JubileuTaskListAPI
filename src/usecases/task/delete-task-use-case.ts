import { DeleteTaskDTO } from "../../domain/dtos/task/delete-task-dto";
import { Task } from "../../domain/entities/task";
import { ITaskRepository } from "../../domain/repositories/task-repository";


export class DeleteTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(taskId: number): Promise<void> {
        try {
            await this.taskRepository.delete(taskId);
        } catch (error: any) {
            throw new Error(`Error in delete task use case: ${error.message}`);
        }
    }
}