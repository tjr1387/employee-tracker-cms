// Import packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Enable dotenv
require('dotenv').config();

// Connect db, using .env variables
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    console.log('Connected to the employee_db database.')
);

