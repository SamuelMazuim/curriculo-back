import { MigrationInterface, QueryRunner } from "typeorm";

export class contact1656895034410 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "contact" ("id" character varying(50) NOT NULL, "fullName" character varying(30) NOT NULL, "phone" character varying(30) NOT NULL, "email" character varying(30), "created_at" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
