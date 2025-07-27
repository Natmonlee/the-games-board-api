/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class CreatePostsTable1753651310714 {
  name = 'CreatePostsTable1753651310714';

  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "updated_at"`);
  }
};
