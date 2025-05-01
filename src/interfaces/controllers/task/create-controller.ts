import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../../usecases/task/create-use-case";

export class CreateTaskController {
    constructor() {}

    static async create(req: Request, res: Response) {

        res.status(200).json({ message: "creation successfully completed!" });
    }
}