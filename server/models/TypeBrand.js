const sequelize = require("../store/store");
const { DataTypes } = require("sequelize");

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export default TypeBrand;
