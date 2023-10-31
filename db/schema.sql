DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE salary (
  id INT NOT NULL AUTO_INCREMENT,
  employee_id INT NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY (employee_id)
  REFERENCES employees(id)
  ON DELETE SET NULL,
  PRIMARY KEY (id)
);


INSERT INTO instructors (first_name, last_name)
VALUES ("Farley", "Wittles"),
       ("Asher", "Filth Lord"),
       ("Sage", "Filth Lord");
