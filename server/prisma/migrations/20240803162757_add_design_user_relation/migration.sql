/*
  Warnings:

  - Added the required column `userId` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `design` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Design` ADD CONSTRAINT `Design_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Mainuser`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
