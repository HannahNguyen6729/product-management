const { DataTypes } = require("sequelize");

const createProduct = (sequelize) => {
  return sequelize.define(
    //model name
    "Product",
    {
      //model attributes are defined here
      name: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //other model options go here
      tableName: "products",
      timestamps: true,
    }
  );
};
module.exports = { createProduct };
