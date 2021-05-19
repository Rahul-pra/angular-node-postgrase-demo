'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Products', [{
      productName: 'Apple',
      description: 'Apple1 Pc',
      productCode: 'a11',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Apple2',
      description: 'Apple2 Pc',
      productCode: 'a12',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Apple3',
      description: 'Apple3 Pc',
      productCode: 'a13',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Apple4',
      description: 'Apple4 Pc',
      productCode: 'a14',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      productName: 'Apple5',
      description: 'Apple5 Pc',
      productCode: 'a15',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
