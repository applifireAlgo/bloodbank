

ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`bloodGroup`) REFERENCES `ast_BloodGroup_M`(`bloodGrpId`);



ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`addressId`) REFERENCES `ast_Address_T`(`addressId`);



ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`gender`) REFERENCES `ast_Gender_M`(`genderId`);

