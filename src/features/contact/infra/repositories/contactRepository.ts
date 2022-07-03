import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { ContactEntity } from "../../../../core/infra/database/entities/contact";
import { Contact } from "../../domain/models/contactModel";

export class ContactRepository {
    private repository: Repository<ContactEntity>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(ContactEntity);
    }

    async create(contact: Contact) {
        const contactEntity = this.repository.create(contact);
        await this.repository.save(contactEntity);
        return contactEntity;
    }
}
