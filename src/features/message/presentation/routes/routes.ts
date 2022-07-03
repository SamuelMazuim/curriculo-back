import { Router } from "express";

export default class MessageRouter {
    public init(routes: Router): Router {
        routes.post("/message", new CreateMessageControler().handle);
        routes.get("message", new GetMessageControler().handle);
        return routes;
    }
}
