insert into employee (first_name, last_name, role_id, manager_id)
VALUES
('Dante','Braccialini',1,null),
('John','Doe',2,1),
('Steve','Smith',3,1),
('Chris','Hansen',3,1);
insert into role (title, salary,department_id)
VALUES
('Manager',1000,1),
('HTML and CSS person',500,2),
('Js person',800,3);
insert into department(name)
VALUES
('Managment'),
('FrontEnd'),
('BackEnd');
