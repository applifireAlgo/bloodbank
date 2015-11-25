

ALTER TABLE `ast_BloodStock_T` ADD CONSTRAINT FOREIGN KEY (`bloodGroupId`) REFERENCES `ast_BloodGroup_M`(`bloodGrpId`);



ALTER TABLE `ast_BloodStock_T` ADD CONSTRAINT FOREIGN KEY (`donarId`) REFERENCES `ast_RegisterADonor_T`(`donorId`);

