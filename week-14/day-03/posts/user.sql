USE reddit;
CREATE TABLE `reddit`.`user` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `iserid_UNIQUE` (`userid` ASC) VISIBLE
);
INSERT INTO
  `reddit`.`user`
VALUES
  ('523', 'JOJO rabbit'),('524', 'Peter Shark'),
  ('525', 'Randy Marsh')