/*
  Warnings:

  - The primary key for the `livro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `livro_isbn` on the `livro` table. The data in that column could be lost. The data in that column will be cast from `VarChar(15)` to `Int`.

*/
-- AlterTable
ALTER TABLE `livro` DROP PRIMARY KEY,
    MODIFY `livro_isbn` INTEGER NOT NULL,
    ADD PRIMARY KEY (`livro_isbn`);
