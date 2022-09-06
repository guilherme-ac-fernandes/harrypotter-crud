/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'Characters',
    [
      { character: 'Harry Potter', house: 'Gryffindor' },
      { character: 'Hermione Granger', house: 'Gryffindor' },
      { character: 'Ron Weasley', house: 'Gryffindor' },
      { character: 'Draco Malfoy', house: 'Slytherin' },
      { character: 'Neville Longbottom', house: 'Gryffindor' },
      { character: 'Luna Lovegood', house: 'Ravenclaw' },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Characters', null, {}),
};
