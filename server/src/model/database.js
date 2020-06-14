
var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node', //database
  'admin', // user
  'admin4321', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;