const Sequelize = require('sequelize');

const DB_NAME = 'udemy-nodejs-sql';
const USER_NAME = 'udemy';
const PASSWORD = 'qw_1a4_K29';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
