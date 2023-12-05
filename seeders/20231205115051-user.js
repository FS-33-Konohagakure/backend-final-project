'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "alfaz admin",
        email: "alfazadmin@gmail.com",
        password: "1234",
        role: "admin"
      },
      {
        username: "alfaz user",
        email: "alfazuser@gmail.com",
        password: "1234",
        role: "user"
      },
      {
        username: "irvi admin",
        email: "irviadmin@gmail.com",
        password: "5678",
        role: "admin"
      },
      {
        username: "irvi user",
        email: "irviuser@gmail.com",
        password: "5678",
        role: "user"
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
