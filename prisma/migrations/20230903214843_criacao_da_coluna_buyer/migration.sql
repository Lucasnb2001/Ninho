/*
  Warnings:

  - Added the required column `buyer` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `buyer` VARCHAR(191) NOT NULL;
