import { Request, Response, Router } from "express";
import { ContactRepository } from "../../infra/repositories/contactRepository";
import { CreateContactController } from "../controllers/contactController";

export default class ContactRouter {
    public init(routes: Router): Router {
        const repository = new ContactRepository();

        const createController = new CreateContactController();

        routes.post("/contact", (req: Request, res: Response) => createController.handle(req, res));
        return routes;
    }
}
