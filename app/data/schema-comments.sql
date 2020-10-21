Create Database msis;

Use msis;

DROP TABLE IF EXIST Comments;
CREATE TABLE Comments (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  commentText TEXT NOT NULL
);

INSERT INTO Comments (id,commentText) VALUES
("1", "This is the first comment"),
("2", "Now this is the next comment yay"),
("3", "Third times the charm!"),
);

SELECT * FROM Comments

Use macklim;

CREATE TABLE Comments (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  commentText TEXT NOT NULL
);

INSERT INTO Comments (id,commentText) VALUES
("1", "This is the first comment"),
("2", "Now this is the next comment yay"),
("3", "Third times the charm!");

SELECT * FROM Comments
