'use strict';

const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo',
          key: 'id'
        }
      }
      
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario')
  }


};
