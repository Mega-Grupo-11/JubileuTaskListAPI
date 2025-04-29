import { Request, Response } from "express";

export class CreateTaskController {
    static async create(req: Request, res: Response) {
        res.status(200).json({ message: "creation successfully completed!" });
    }
}