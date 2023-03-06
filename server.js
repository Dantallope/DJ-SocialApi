require("dotenv").config();
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});