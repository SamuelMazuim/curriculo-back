import { MigrationInterface, QueryRunner } from "typeorm";

export class message1656895903392 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "message" ("id" character varying(50) NOT NULL, "nickname" character varying(30) NOT NULL, "message" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
