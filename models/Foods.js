'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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