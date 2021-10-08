const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Category = sequelize.define('Category', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Id: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {

});

const Skill = sequelize.define('Skill', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Owner: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
  
  });


const User = sequelize.define('User', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.email,
      allowNull: false
    },
    token: {
        type: DataTypes.STRING,
      }
  }, {
  
  });