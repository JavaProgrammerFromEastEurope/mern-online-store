const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default BasketDevice;
