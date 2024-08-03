/*
  Warnings:

  - Added the required column `shoeModel` to the `Design` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoeSize` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `design` ADD COLUMN `shoeModel` VARCHAR(191) NOT NULL,
    ADD COLUMN `shoeSize` INTEGER NOT NULL;
