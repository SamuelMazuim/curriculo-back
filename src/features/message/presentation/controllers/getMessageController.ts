import { Request, Response } from "express";
import { ok, serverError } from "../../../../core/presentation/helpers/httpHandler";
import { MessageRepository } from "../../infra/repositories/messageRepository";

export class GetMessageControler {
    constructor(private repository: MessageRepository) {}
    async handle(_: any, res: Response) {
        try {
            const result = await this.repository.get();

            return ok(res, result);
        } catch (error) {
            return serverError(res, "Failed to get messages", error);
        }
    }
}
