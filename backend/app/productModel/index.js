const { Sequelize, DataTypes } = require("sequelize");
const { USER, PASSWORD, HOST, dialect, DB } = require("../config/dbConfig");
const { createProduct } = require("./productModel");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const Product = createProduct(sequelize);

module.exports = { sequelize, Product };
