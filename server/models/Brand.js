const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Brand;
