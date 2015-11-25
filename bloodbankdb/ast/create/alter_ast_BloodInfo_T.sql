

ALTER TABLE `ast_BloodInfo_T` ADD CONSTRAINT FOREIGN KEY (`visitId`) REFERENCES `ast_DonorVisit_T`(`visitId`);

