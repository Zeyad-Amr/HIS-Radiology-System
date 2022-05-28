-- cereate departement table
CREATE TABLE `akwa-his`.`dep` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

-- create empolyee table
CREATE TABLE `akwa-his`.`emp` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `salary` INT NOT NULL,
  `degree` VARCHAR(255) NULL,
  `shift` TIME NULL,
  `holidays` DATE NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NULL,
  `dep_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`user_id` ASC) VISIBLE,
  INDEX `depID_idx` (`dep_id` ASC) VISIBLE,
  CONSTRAINT `userID`
    FOREIGN KEY (`user_id`)
    REFERENCES `akwa-his`.`user` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `depID`
    FOREIGN KEY (`dep_id`)
    REFERENCES `akwa-his`.`dep` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);