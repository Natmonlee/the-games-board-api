/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class CreatePostsTable1753650405055 {
  name = 'CreatePostsTable1753650405055';

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" SERIAL NOT NULL, "author" character varying(30) NOT NULL, "tagline" character varying(100) NOT NULL, "content" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
};
