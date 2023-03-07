require("dotenv").config();
const inquirer = require('inquirer');
//const cTable = require('console.table');
const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});
connect.connect(err =>{
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
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a rob',
      'Add an employee',
      'Update employee rob',
      'End',
    ]
  }).then(resp =>{
    switch(resp.main){
      case 'View all departments':
        vDep();
        break;
      case 'View all roles':
        vRole();
        break;
      case 'View all employees':
        vEmpl();
        break;
      case 'Add a department':
        addDep();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmpl();
        break;
      case 'Update employee role':
        upEmpl();
        break;
      case "End":
        connect.end();
        break;
      default:
        connect.end();
    }
  });
};
const vDep=()=>{
  connect.query('select * from department',(err,res)=>{
    if (err) throw err;
    console.table(res);
    menu();
  });
};
const vRole=()=>{
  connect.query('select * from role',(err,res)=>{
    if (err) throw err;
    console.table(res);
    menu();
  });
};
const vEmpl=()=>{
  connect.query('select * from employee',(err,res)=>{
    if (err) throw err;
    console.table(res);
    menu();
  });
};