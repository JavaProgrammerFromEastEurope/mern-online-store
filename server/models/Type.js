const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export default Type;
