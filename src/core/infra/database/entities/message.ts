import { randomUUID } from "crypto";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Message } from "../../../../features/message/domain/models/messageModel";

@Entity({ name: "message" })
export class MessageEntity extends BaseEntity implements Message {
    @PrimaryColumn()
    id: string;

    @Column()
    nickname: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at?: Date;

    @BeforeInsert()
    beforeInsert() {
        this.id = randomUUID();
    }

    constructor(id: string, nickname: string, message: string) {
        super();
        this.id = id;
        this.nickname = nickname;
        this.message = message;
    }
}
