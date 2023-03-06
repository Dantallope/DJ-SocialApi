require("dotenv").config();
const inquirer = require('inquirer');
//const cTable = require('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});
connection.connect(err =>{
  if (err) throw err;
  console.log("Employee Tracker!");
  menu();
});

const menu = () => {
  inquirer.prompt ({
    name: 'main',
    type: 'list',
    choices:[
      'View all departments',
      'View all jobs',
      'View all employees',
      'Add a department',
      'Add a job',
      'Add an employee',
      'Update employee job',
      'Exit',
    ]
  }).then(resp =>{
    switch(resp.main){
      case 'View all departments':
        viewDepartment();
        break;
      case 'View all jobs':
        viewJobs();
        break;
      case 'View all employees':
        viewEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a job':
        addJob();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update employee job':
        updateEmployee();
        break;
      case "Exit":
        connection.end();
        break;
      default:
        connection.end();
    }
  });
};