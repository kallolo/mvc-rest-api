'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
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
          msg: 'Username harus dimulai dengan huruf dan terdiri dari 4 - 40 karakter.'
        },
        notEmpty: { msg: 'Silahakan input username' }
      }
    },
    password: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};