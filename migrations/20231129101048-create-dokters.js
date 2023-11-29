'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dokters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      spesialisasi: {
        type: Sequelize.STRING
      },
      pengalaman: {
        type: Sequelize.INTEGER
      },
      str: {
        type: Sequelize.INTEGER
      },
      hospital: {
        type: Sequelize.STRING
      },
      biaya: {
        type: Sequelize.INTEGER
      },
      alumnus: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      hari: {
        type: Sequelize.STRING
      },
      jam: {
        type: Sequelize.STRING
      },
      kategoriId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dokters');
  }
};