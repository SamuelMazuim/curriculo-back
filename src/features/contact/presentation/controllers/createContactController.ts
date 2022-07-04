import { Request, Response } from "express";
import { badRquest, ok, serverError } from "../../../../core/presentation/helpers/httpHandler";
import { ContactRepository } from "../../infra/repositories/contactRepository";

export class CreateContactController {
    constructor(private repository: ContactRepository) {}
    async handle(req: Request, res: Response) {
        try {
            const { fullName, phone, email } = req.body;

            if (!fullName) {
                return badRquest(res, "Full name not provided.");
            }
            if (!phone) {
                return badRquest(res, "Phone not provided.");
            }
            if (!email) {
                return badRquest(res, "E-mail not provided.");
            }

            const result = await {
                fullName,
                phone,
                email,
            };
            await this.repository.create(result);

            return ok(res, result, "Contact successfully created.");
        } catch (error: any) {
            console.log(error.message);
            return serverError(res, "New contact creation failed.", error);
        }
    }
}
