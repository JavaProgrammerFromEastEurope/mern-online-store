const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default Basket;
