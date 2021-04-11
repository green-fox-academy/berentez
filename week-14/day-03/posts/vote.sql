CREATE TABLE `reddit`.`vote` (
  `postid` INT NOT NULL,
  `userid` INT NOT NULL,
  `vote` INT NULL
);
INSERT INTO
  `reddit`.`vote` VALUE ('25', '523', '1'),
  ('25', '524', '1'),
  ('74', '525', '-1')