import { Task } from "src/domain/entities/task";
import { ITaskRepository } from "src/domain/repositories/task-repository";

export class SearchTasksUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(
        title: string,
        filters?: { priority?: string; date?: string },
        sort?: { field: string; order: "asc" | "desc" }
    ): Promise<Task[]> {
        if (!title) {
            throw new Error("Title is required for search");
        }

        return this.taskRepository.searchTasks(title, filters, sort);
    }
}