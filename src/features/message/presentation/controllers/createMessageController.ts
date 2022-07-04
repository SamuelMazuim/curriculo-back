import { Request, Response } from "express";
import { badRquest, ok, serverError } from "../../../../core/presentation/helpers/httpHandler";
import { MessageRepository } from "../../infra/repositories/messageRepository";

export class CreateMessageController {
    constructor(private repository: MessageRepository) {}
    async handle(req: Request, res: Response) {
        try {
            const { nickname, message } = req.body;

            if (!nickname) {
                return badRquest(res, "Nickname not provided.");
            }
            if (!message) {
                return badRquest(res, "Message not provided.");
            }

            const result = await {
                nickname,
                message,
            };

            await this.repository.create(result);

            return ok(res, result, "Message successfully created.");
        } catch (error) {
            return serverError(res, "New message creation failed.", error);
        }
    }
}
