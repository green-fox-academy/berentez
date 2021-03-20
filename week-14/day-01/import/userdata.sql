SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
USE bookinfo;
CREATE TABLE IF NOT EXISTS `userdata` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `prefix` ENUM('Rev', 'Honorable', 'Dr', 'Mr', 'Mrs', 'Ms', ''),
    `first_name` VARCHAR(25) NOT NULL,
    `last_name` VARCHAR(25) NOT NULL,
    `address` VARCHAR(120) DEFAULT '',
    `height` FLOAT NULL,
    `bitcoin_address` VARCHAR(34) NOT NULL,
    `color_preference` VARCHAR(7) DEFAULT '',
    PRIMARY KEY (`id`)
  );