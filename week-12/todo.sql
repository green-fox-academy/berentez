CREATE TABLE todo (
  id INT PRIMARY KEY,
  task_name VARCHAR(50),
  done BOOLEAN
);
SHOW TABLES;
DESCRIBE todo;
INSERT INTO
  todo
VALUES
  (1, 'buy milk', true);
INSERT INTO
  todo
VALUES
  (2, 'do homework', false);
SELECT
  *
FROM
  todo;