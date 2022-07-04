import express, { Express, json, Request, Response, Router, urlencoded } from "express";
import cors from "cors";
import ContactRouter from "../../features/contact/presentation/routes/routes";
import MessageRouter from "../../features/message/presentation/routes/routes";

export default class App {
    readonly express: Express;
    constructor() {
        this.express = express();
    }

    public middlewares() {
        this.express.use(cors());
        this.express.use(json());
        this.express.use(urlencoded());
    }

    public routes() {
        const routes = Router();
        routes.get("/", (req: Request, res: Response) => {
            return res.send("ok");
        });

        const contactRoutes = new ContactRouter().init(routes);
        const messageRoutes = new MessageRouter().init(routes);

        this.express.use(contactRoutes);
        this.express.use(messageRoutes);
        this.express.use(routes);
    }
    public start() {
        this.express.listen(process.env.PORT || 8081, () => console.log("Server is running..."));
    }

    public init() {
        this.middlewares();
        this.routes();
        this.start();
    }
}
