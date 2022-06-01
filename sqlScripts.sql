-- cereate departement table
CREATE TABLE `akwa-his`.`dep` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

-- create empolyee table
CREATE TABLE `akwa-his`.`emp` (
  `user_id` INT NOT NULL,
  `salary` INT NOT NULL,
  `degree` VARCHAR(255) NULL,
  `shift` TIME NULL,
  `holidays` DATE NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `dep_id` INT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `id_idx` (`user_id` ASC) VISIBLE,
  INDEX `depID_idx` (`dep_id` ASC) VISIBLE,
  CONSTRAINT `userID`
    FOREIGN KEY (`user_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `depID`
    FOREIGN KEY (`dep_id`)
    REFERENCES `akwa-his`.`dep` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

-- Create device 
CREATE TABLE `akwa-his`.`device` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `arrivial_date` TIMESTAMP NULL,
  `installation_date` TIMESTAMP NULL,
  PRIMARY KEY (`id`));
