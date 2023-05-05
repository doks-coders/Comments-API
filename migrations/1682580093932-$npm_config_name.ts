import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1682580093932 implements MigrationInterface {
    name = ' $npmConfigName1682580093932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4875672591221a61ace66f2d4f9"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "parentCommentId" TO "repliesId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4b9ec4bdabbb286fbe06bed6ddc" FOREIGN KEY ("repliesId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4b9ec4bdabbb286fbe06bed6ddc"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "repliesId" TO "parentCommentId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4875672591221a61ace66f2d4f9" FOREIGN KEY ("parentCommentId") REFERENCES "comments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
