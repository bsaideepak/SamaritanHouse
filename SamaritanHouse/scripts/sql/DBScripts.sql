CREATE TABLE `EmployerInfo` (
  `EmployerID` int(11) NOT NULL AUTO_INCREMENT,
  `FName` varchar(45) DEFAULT NULL,
  `MName` varchar(45) DEFAULT NULL,
  `LName` varchar(45) DEFAULT NULL,
  `Company` varchar(45) DEFAULT NULL,
  `Address1` varchar(20) DEFAULT NULL,
  `Address2` varchar(20) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `Sate` varchar(20) DEFAULT NULL,
  `Zip` varchar(10) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `Driverlicense` varchar(45) DEFAULT NULL,
  `UserName` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`EmployerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `JobInfo` (
  `JobID` int(11) NOT NULL AUTO_INCREMENT,
  `EmployerID` int(11) DEFAULT NULL,
  `Title` varchar(20) DEFAULT NULL,
  `Description` varchar(150) DEFAULT NULL,
  `WorkSiteAddress` varchar(150) DEFAULT NULL,
  `StartDate` varchar(45) DEFAULT NULL,
  `EndDate` varchar(45) DEFAULT NULL,
  `SkillRequired` varchar(45) DEFAULT NULL,
  `NoWorkers` int(11) DEFAULT NULL,
  `NoHours` int(11) DEFAULT NULL,
  `PayRate` decimal(10,0) DEFAULT NULL,
  `EmployerRating` int(11) DEFAULT NULL,
  `WorkerRating` int(11) DEFAULT NULL,
  `JobStatusID` int(11) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`JobID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `WorkerInfo` (
  `WorkerID` int(11) NOT NULL AUTO_INCREMENT,
  `FName` varchar(45) DEFAULT NULL,
  `MName` varchar(45) DEFAULT NULL,
  `LName` varchar(45) DEFAULT NULL,
  `DOB` varchar(10) DEFAULT NULL,
  `SSN` varchar(12) DEFAULT NULL,
  `SkillId` varchar(20) DEFAULT NULL,
  `Address1` varchar(30) DEFAULT NULL,
  `Address2` varchar(30) DEFAULT NULL,
  `City` varchar(35) DEFAULT NULL,
  `State` varchar(45) DEFAULT NULL,
  `Zip` varchar(15) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Ethencity` varchar(25) DEFAULT NULL,
  `JobSeeker` varchar(10) DEFAULT NULL,
  `WorkerStatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`WorkerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `JobStatus` (
  `JobStatusID` int(11) NOT NULL,
  `WorkerID` int(11) DEFAULT NULL,
  `JobID` int(11) DEFAULT NULL,
  PRIMARY KEY (`JobStatusID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Skill` (
  `SkillID` int(11) NOT NULL,
  `SkillTypes` varchar(45) DEFAULT NULL,
  `WorkerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`SkillID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `LoginInfo` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Roles` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Roles` (
  `RolesID` int(11) NOT NULL,
  `Roles` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`RolesID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

