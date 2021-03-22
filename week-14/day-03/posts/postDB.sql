CREATE DATABASE reddit CHARACTER SET utf8 COLLATE utf8_general_ci;
USE reddit;
CREATE TABLE `reddit`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  `timestamp` TIMESTAMP NULL,
  `score` INT NULL DEFAULT 0,
  `owner` VARCHAR(45) NULL,
  `vote` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);
INSERT INTO
  `reddit`.`post`
VALUES
  (
    '25',
    'Dear JavaScript',
    'http://9gag.com',
    '1494339525',
    '791',
    'null',
    '1'
  )