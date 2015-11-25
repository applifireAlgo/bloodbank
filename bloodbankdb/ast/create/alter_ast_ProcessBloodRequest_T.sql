

ALTER TABLE `ast_ProcessBloodRequest_T` ADD CONSTRAINT FOREIGN KEY (`bloodRequestId`) REFERENCES `ast_BloodRequest_T`(`bloodRequestId`);



ALTER TABLE `ast_ProcessBloodRequest_T` ADD CONSTRAINT FOREIGN KEY (`donorId`) REFERENCES `ast_RegisterADonor_T`(`donorId`);

