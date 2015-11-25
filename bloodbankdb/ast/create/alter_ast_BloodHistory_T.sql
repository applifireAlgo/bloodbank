

ALTER TABLE `ast_BloodHistory_T` ADD CONSTRAINT FOREIGN KEY (`bloodInfo`) REFERENCES `ast_BloodInfo_T`(`bInfoId`);

