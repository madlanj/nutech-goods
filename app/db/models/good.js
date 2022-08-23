'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Good.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    purchasePrice: DataTypes.DOUBLE,
    purchaseSell: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    image: {
      type:DataTypes.TEXT,
      defaultValue:null
    }
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};