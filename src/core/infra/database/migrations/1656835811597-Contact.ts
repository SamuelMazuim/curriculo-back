import { MigrationInterface, QueryRunner } from "typeorm";

export class Contact1656835811597 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "contact" ("id" character varying(20) NOT NULL, "fullName" character varying(30) NOT NULL, "phone" integer NOT NULL, "email" character varying(30), "created_at" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
