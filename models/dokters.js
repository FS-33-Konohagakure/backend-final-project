'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokters extends Model {
    static associate(models) {
      // define association here
    }
  }
  Dokters.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    spesialisasi: DataTypes.STRING,
    pengalaman: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    hospital: DataTypes.STRING,
    biaya: DataTypes.INTEGER,
    alumnus: DataTypes.STRING,
    info: DataTypes.STRING,
    hari: DataTypes.STRING,
    jam: DataTypes.STRING,
    kategoriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dokters',
  });
  return Dokters;
};