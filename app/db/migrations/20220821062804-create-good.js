'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Goods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false,
      },
      purchasePrice: {
        type: Sequelize.DOUBLE
      },
      purchaseSell: {
        type: Sequelize.DOUBLE
      },
      stock: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue:null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Goods');
  }
};