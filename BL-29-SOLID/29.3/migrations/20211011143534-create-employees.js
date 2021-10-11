'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};
