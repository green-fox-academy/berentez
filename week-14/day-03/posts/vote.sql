USE reddit;
CREATE TABLE `reddit`.`vote` (
  `id` INT NOT NULL,
  `postid` INT NOT NULL,
  `userid` INT NOT NULL,
  `vote` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `postid_idx` (`postid` ASC) VISIBLE,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `postid` FOREIGN KEY (`postid`) REFERENCES `reddit`.`post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `reddit`.`user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
ALTER TABLE
  `reddit`.`vote` CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT;
INSERT INTO
  `reddit`.`vote` VALUE (NULL, '25', '523', '1'),
  (NULL, '25', '524', '1'),
  (NULL, '74', '525', '-1')