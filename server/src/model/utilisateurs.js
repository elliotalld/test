
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./database');

var Utilisateur = sequelize.define('utilisateur', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: Sequelize.STRING(20)

  },
  family_name:{
    type:Sequelize.STRING(20)


  },
  password:{
      type:Sequelize.STRING(20)
  },

  last_login_date:{
  allowNull: true,
  type:Sequelize.DATE,


}
});

  
 
module.exports = Utilisateur ; 