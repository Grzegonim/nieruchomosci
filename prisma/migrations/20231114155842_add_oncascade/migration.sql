-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `Photo_offerId_fkey`;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
