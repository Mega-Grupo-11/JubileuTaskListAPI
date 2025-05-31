import {  } from "../../domain/repositories/task-repository";
import { ITaskRepository } from "../../domain/repositories/task-repository";

export class DeleteCompletedTasksUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(): Promise<void> {
        try {
            await this.taskRepository.deleteCompletedTasks();
        } catch (error: any) {
            throw new Error(`Error in delete completed tasks use case: ${error.message}`);
        }
    }
}