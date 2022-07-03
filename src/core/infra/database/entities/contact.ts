import { randomUUID } from "crypto";
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Contact } from "../../../../features/contact/domain/models/contactModel";

@Entity({ name: "Contacts" })
export class ContactEntity extends BaseEntity implements Contact {
    @PrimaryColumn()
    id: string;

    @Column()
    fullName: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at?: Date;

    @BeforeInsert()
    beforeInsert() {
        this.id = randomUUID();
    }

    constructor(id: string, fullName: string, phone: number, email: string) {
        super();

        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
    }
}
