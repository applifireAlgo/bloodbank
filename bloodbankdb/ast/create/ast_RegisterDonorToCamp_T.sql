DROP TABLE IF EXISTS `ast_RegisterDonorToCamp_T`;

CREATE TABLE `ast_RegisterDonorToCamp_T` ( `regId` VARCHAR(256) NOT NULL, `campId` VARCHAR(256) NOT NULL, `donorId` VARCHAR(256) NOT NULL, `reqCompleted` TINYINT(1) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`regId`));

