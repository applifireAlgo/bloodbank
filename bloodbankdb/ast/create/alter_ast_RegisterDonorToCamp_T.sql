

ALTER TABLE `ast_RegisterDonorToCamp_T` ADD CONSTRAINT FOREIGN KEY (`campId`) REFERENCES `ast_RegisterACamp_T`(`campId`);



ALTER TABLE `ast_RegisterDonorToCamp_T` ADD CONSTRAINT FOREIGN KEY (`donorId`) REFERENCES `ast_RegisterADonor_T`(`donorId`);

