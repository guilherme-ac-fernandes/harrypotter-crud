'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Characters',
    [
      { character: 'Harry Potter' },
      { character: 'Hermione Granger' },
      { character: 'Ron Weasley' },
      { character: 'Draco Malfoy' },
      { character: 'Neville Longbottom' },
      { character: 'Luna Lovegood' },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Characters', null, {}),
};
