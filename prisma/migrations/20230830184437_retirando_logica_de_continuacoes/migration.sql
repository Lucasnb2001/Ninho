/*
  Warnings:

  - You are about to drop the column `livro_isbn_ant` on the `livro` table. All the data in the column will be lost.
  - Made the column `livro_titulo` on table `livro` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `livro` DROP FOREIGN KEY `FK_livro_ant`;

-- AlterTable
ALTER TABLE `livro` DROP COLUMN `livro_isbn_ant`,
    MODIFY `livro_titulo` VARCHAR(50) NOT NULL;
