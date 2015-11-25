

ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`campId`) REFERENCES `ast_RegisterACamp_T`(`campId`);



ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`city`) REFERENCES `ast_City_M`(`cityId`);



ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`donationType`) REFERENCES `ast_DonationType_M`(`donationTypeId`);



ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`donorId`) REFERENCES `ast_RegisterADonor_T`(`donorId`);

