import { Request, Response } from "express";
import { badRquest, ok, serverError } from "../../../../core/presentation/helpers/httpHandler";

export class CreateContactController {
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
            return ok(res, result, "Contact successfully created.");
        } catch (error) {
            return serverError(res, "New contact creation failed.", error);
        }
    }
}
