import { Request, Response, Router } from "express";
import { MessageRepository } from "../../infra/repositories/messageRepository";
import { CreateMessageController } from "../controllers/createMessageController";
import { GetMessageControler } from "../controllers/getMessageController";

export default class MessageRouter {
    public init(routes: Router): Router {
        const repository = new MessageRepository();

        const createController = new CreateMessageController(repository);
        const getController = new GetMessageControler(repository);

        routes.post("/message", (req: Request, res: Response) => createController.handle(req, res));
        routes.get("/message", (req: Request, res: Response) => getController.handle(req, res));
        return routes;
    }
}
