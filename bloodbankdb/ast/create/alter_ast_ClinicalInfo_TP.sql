

ALTER TABLE `ast_ClinicalInfo_TP` ADD CONSTRAINT FOREIGN KEY (`visitId`) REFERENCES `ast_DonorVisit_T`(`visitId`);

