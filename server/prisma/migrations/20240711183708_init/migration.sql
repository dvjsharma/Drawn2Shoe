-- CreateTable
CREATE TABLE `Cart` (
    `productId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `shoeSize` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`productId`, `email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Design` (
    `designId` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`designId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Designer` (
    `email` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `portfolioLink` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mainuser` (
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `profilepic` VARCHAR(191) NULL,
    `passwd` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `pincode` INTEGER NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orderId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `shoeSize` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `orderTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Orders_email_idx`(`email`),
    PRIMARY KEY (`orderId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `shoeId` INTEGER NULL,
    `designId` INTEGER NULL,
    `category` VARCHAR(191) NOT NULL DEFAULT 'pre-designed',
    `productImage` VARCHAR(191) NULL,

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Retailer` (
    `email` VARCHAR(191) NOT NULL,
    `shopName` VARCHAR(191) NOT NULL,
    `contactNumber` INTEGER NOT NULL,
    `shopaddressLine1` VARCHAR(191) NULL,
    `shopCity` VARCHAR(191) NULL,
    `shopPincode` INTEGER NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shoe` (
    `shoeid` INTEGER NOT NULL AUTO_INCREMENT,
    `shoename` VARCHAR(191) NOT NULL,
    `supplierId` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `shoeImage` VARCHAR(191) NULL,

    PRIMARY KEY (`shoeid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `supplierId` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`supplierId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_email_fkey` FOREIGN KEY (`email`) REFERENCES `Mainuser`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Designer` ADD CONSTRAINT `Designer_email_fkey` FOREIGN KEY (`email`) REFERENCES `Mainuser`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_email_fkey` FOREIGN KEY (`email`) REFERENCES `Mainuser`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_designId_fkey` FOREIGN KEY (`designId`) REFERENCES `Design`(`designId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_shoeId_fkey` FOREIGN KEY (`shoeId`) REFERENCES `Shoe`(`shoeid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Retailer` ADD CONSTRAINT `Retailer_email_fkey` FOREIGN KEY (`email`) REFERENCES `Mainuser`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shoe` ADD CONSTRAINT `Shoe_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`supplierId`) ON DELETE RESTRICT ON UPDATE CASCADE;
