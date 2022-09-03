'use strict';

//JSdocs
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
*/

const createProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    tableName: 'products'
  })

  return Product;
}

module.exports = createProductModel;
