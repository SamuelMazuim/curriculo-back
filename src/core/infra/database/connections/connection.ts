import { Connection, createConnection, getConnection } from "typeorm";

export class DatabaseConnection {
    private static _connection: Connection;

    static async initConnection() {
        if (!DatabaseConnection._connection) {
            this._connection = await createConnection();
        }
    }

    public static getConnection() {
        let connection = getConnection();
        if (!connection) {
            throw new Error("Database is not connected");
        }
        return DatabaseConnection._connection;
    }

    public static async closeConnection() {
        let connection = getConnection();
        if (!connection) {
            throw new Error("Database is not connected");
        }
        await DatabaseConnection._connection.close();
    }
}
