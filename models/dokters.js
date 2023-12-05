'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dokters.init({
    name: DataTypes.STRING,
    image_normal: DataTypes.STRING,
    image_crop: DataTypes.STRING,
    spesialisasi: DataTypes.STRING,
    pengalaman: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    hospital: DataTypes.STRING,
    biaya: DataTypes.INTEGER,
    alumnus: DataTypes.STRING,
    info: DataTypes.STRING,
    jadwal_hari: DataTypes.STRING,
    jadwal_jam: DataTypes.STRING,
    kategoriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dokters',
  });
  return Dokters;
};