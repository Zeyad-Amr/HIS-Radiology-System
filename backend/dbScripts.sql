-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema akwa-his
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema akwa-his
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `akwa-his` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `akwa-his`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(62) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `fname` VARCHAR(50) NULL DEFAULT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  `bdate` DATE NULL DEFAULT NULL,
  `gender` VARCHAR(8) NULL DEFAULT NULL,
  `phone` INT NULL DEFAULT NULL,
  `SSN` VARCHAR(20) NOT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `SSN_UNIQUE` (`SSN` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 57
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `akwa-his`.`dep`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`dep` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `akwa-his`.`device`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`device` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `arrivial_date` TIMESTAMP NULL DEFAULT NULL,
  `installation_date` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `akwa-his`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`services` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  `cost` FLOAT NULL,
  `dep_id` INT NOT NULL,
  `device_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_services_dep1_idx` (`dep_id` ASC) VISIBLE,
  INDEX `fk_services_device1_idx` (`device_id` ASC) VISIBLE,
  INDEX `fk_services_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_services_dep1`
    FOREIGN KEY (`dep_id`)
    REFERENCES `akwa-his`.`dep` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_services_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `akwa-his`.`device` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_services_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `akwa-his`.`report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`report` (
  `num` INT NOT NULL,
  `creeate_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `text` TEXT NULL,
  `doctor_id` INT NOT NULL,
  PRIMARY KEY (`doctor_id`),
  INDEX `fk_report_user1_idx` (`doctor_id` ASC) VISIBLE,
  CONSTRAINT `fk_report_user1`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `akwa-his`.`file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`file` (
  `num` INT NOT NULL,
  `create_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `file_url` VARCHAR(100) NULL,
  `tech_id` INT NOT NULL,
  PRIMARY KEY (`tech_id`),
  CONSTRAINT `fk_file_user1`
    FOREIGN KEY (`tech_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `akwa-his`.`result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`result` (
  `id` INT NOT NULL,
  `report_doctor_id` INT NOT NULL,
  `file_tech_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_report1_idx` (`report_doctor_id` ASC) VISIBLE,
  INDEX `fk_result_file1_idx` (`file_tech_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_report1`
    FOREIGN KEY (`report_doctor_id`)
    REFERENCES `akwa-his`.`report` (`doctor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_file1`
    FOREIGN KEY (`file_tech_id`)
    REFERENCES `akwa-his`.`file` (`tech_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`order` (
  `number` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `receptionist_id` INT NOT NULL,
  `patient_id` INT NOT NULL,
  `services_id` INT NOT NULL,
  `result_id` INT NULL,
  PRIMARY KEY (`receptionist_id`, `patient_id`, `services_id`),
  INDEX `fk_order_user_idx` (`receptionist_id` ASC) VISIBLE,
  INDEX `fk_order_user1_idx` (`patient_id` ASC) VISIBLE,
  INDEX `fk_order_services1_idx` (`services_id` ASC) VISIBLE,
  INDEX `fk_order_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_order_user`
    FOREIGN KEY (`receptionist_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_user1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_services1`
    FOREIGN KEY (`services_id`)
    REFERENCES `akwa-his`.`services` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `akwa-his`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`appointment` (
  `start_time` TIMESTAMP NULL,
  `end_time` TIMESTAMP NULL,
  `id` INT NOT NULL,
  `services_id` INT NOT NULL,
  `device_id` INT NOT NULL,
  `order_receptionist_id` INT NULL,
  `order_patient_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_appointment_services1_idx` (`services_id` ASC) VISIBLE,
  INDEX `fk_appointment_device1_idx` (`device_id` ASC) VISIBLE,
  INDEX `fk_appointment_order1_idx` (`order_receptionist_id` ASC, `order_patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_services1`
    FOREIGN KEY (`services_id`)
    REFERENCES `akwa-his`.`services` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_device1`
    FOREIGN KEY (`device_id`)
    REFERENCES `akwa-his`.`device` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_order1`
    FOREIGN KEY (`order_receptionist_id` , `order_patient_id`)
    REFERENCES `mydb`.`order` (`receptionist_id` , `patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

USE `akwa-his` ;

-- -----------------------------------------------------
-- Table `akwa-his`.`emp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`emp` (
  `user_id` INT NOT NULL,
  `salary` INT NOT NULL,
  `degree` VARCHAR(255) NULL DEFAULT NULL,
  `shift` TIME NULL DEFAULT NULL,
  `holidays` DATE NULL DEFAULT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `dep_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `id_idx` (`user_id` ASC) VISIBLE,
  INDEX `depID_idx` (`dep_id` ASC) VISIBLE,
  CONSTRAINT `depID`
    FOREIGN KEY (`dep_id`)
    REFERENCES `akwa-his`.`dep` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `userID`
    FOREIGN KEY (`user_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `akwa-his`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `akwa-his`.`patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `fname` VARCHAR(150) NULL DEFAULT NULL,
  `lname` VARCHAR(150) NULL DEFAULT NULL,
  `bdate` DATE NULL DEFAULT NULL,
  `gender` VARCHAR(8) NULL DEFAULT NULL,
  `phone` INT NULL DEFAULT NULL,
  `SSN` INT NOT NULL,
  `address` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `SSN_UNIQUE` (`SSN` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
