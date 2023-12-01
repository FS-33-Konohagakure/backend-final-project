'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Foods.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    detail: DataTypes.STRING,
    kategoriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Foods',
  });
  return Foods;
};