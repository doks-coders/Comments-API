import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1682580621064 implements MigrationInterface {
    name = ' $npmConfigName1682580621064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4b9ec4bdabbb286fbe06bed6ddc"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "repliesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "repliesId" integer`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4b9ec4bdabbb286fbe06bed6ddc" FOREIGN KEY ("repliesId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
