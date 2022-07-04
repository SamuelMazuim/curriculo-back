import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { MessageEntity } from "../../../../core/infra/database/entities/message";
import { Message } from "../../domain/models/messageModel";

export class MessageRepository {
    private repository: Repository<MessageEntity>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(MessageEntity);
    }

    async create(message: Message) {
        const messageEntity = this.repository.create(message);
        await this.repository.save(messageEntity);
        return messageEntity;
    }

    async get() {
        return MessageEntity.find({
            order: {
                created_at: "DESC",
            },
        });
    }
}
