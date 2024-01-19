'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('produtos','oferta', { 
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: true,
     }); 
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('produtos','oferta')
}};
