const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false }
});

export default Rating;
