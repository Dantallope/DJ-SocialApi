drop database if exists employee_db;
create database employee_db:
use employee_db;

create table employees (
  id int AUTO_INCREMENT not null,
  firstName varchar(100) not null,
  lastName varchar(100) not null,
  title varchar(100) not null,
  department varchar(100) not null,
  salary int not null,
  manager (varchar)
)