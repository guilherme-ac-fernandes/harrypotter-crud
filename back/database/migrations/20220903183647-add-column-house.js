'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Characters', 'house', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Characters', 'house');
  }
};
