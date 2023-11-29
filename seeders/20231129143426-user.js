'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "alfaz admin",
        email: "alfazadmin@gmail.com",
        password: "1234",
        role: "Admin"
      },
      {
        username: "alfaz user",
        email: "alfazadmin@gmail.com",
        password: "1234",
        role: "Admin"
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
        role: "User"
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
