'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products',
    [
      {
        product_name: 'Martelo de quebrar vidro',
        description: 'Martelo especial, para quebrar todo tipo de vidro.',
        valor: 99.98,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        product_name: 'Pano de enxugar gelo',
        description: 'Pano feito de material exclusivo, destinado ao uso com gelo.',
        valor: 199.90,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ]
  ),

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
