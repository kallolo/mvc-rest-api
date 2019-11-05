'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: {
            args: 4,
            msg:
              'Username minimal 4 karakter.'
          },
          max: {
            args: 40,
            msg:
              'Username maksimal 40 karakter.'
          },
          is: {
            args: /^[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]+$/gi, // must start with letter and only have letters, numbers, dashes
            msg: 'Username harus dimulai dengan huruf dan terdiri dari 3 - 40 karakter.'
          },
          notEmpty: { msg: 'Silahakan input username' }
        }
      },
      password: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};