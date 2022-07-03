import App from "./core/presentation/app";
import { DatabaseConnection } from "./core/infra/database/connections/connection";

DatabaseConnection.initConnection()
    .then(() => {
        const app = new App();
        app.init();
    })
    .catch((error) => {
        console.log(error);
    });
