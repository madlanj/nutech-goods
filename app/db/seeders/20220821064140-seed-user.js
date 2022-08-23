'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = bcrypt.hashSync('password', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin Nutech',
      username: 'admin',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
