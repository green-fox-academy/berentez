CREATE DATABASE reddit CHARACTER SET utf8 COLLATE utf8_general_ci;
USE reddit;
CREATE TABLE `reddit`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `owner` INT NULL,
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
    '2010-10-10 10:10:10',
    '214'
  ),
  (
    '74',
    'Crockford',
    'http://9gag.com',
    '2012-12-12 12:00:00',
    '169'
  );
INSERT INTO
  `post` (`title`, `url`)
VALUES
  ('Crockford', 'http://9gag.com');