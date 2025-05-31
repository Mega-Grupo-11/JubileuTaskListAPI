import { Task } from "src/domain/entities/task";
import { ITaskRepository } from "src/domain/repositories/task-repository";

export class ReadByIdTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(taskId: number) {
        if (!taskId) {
            throw new Error("Task ID is required");
        }
        return this.taskRepository.findById(taskId);
    }
}