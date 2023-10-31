-- Seed to be inputted
INSERT INTO departments (department_name)
VALUES 
("Fishbowl"),
("Puddle"),
("River"),
("Lake"),
("Ocean");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Minnow", 100, 1),
("Guppy", 1000, 2),
("Goldfish", 10000, 3),
("Dolphin", 100000, 4),
("Whale", 1000000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Tad", "Poles", 1, 1),
("Sha", "Arks", 2, 1),
("Blue", "Wales", 4, null),
("Doll", "Fins", 3, 1),
("Shrie", "Imps", 5, null );