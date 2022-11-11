import Basket from "./Basket";
import BasketDevice from "./BasketDevice";
import Brand from "./Brand";
import DeviceInfo from "./DeviceInfo";
import Device from "./Device";
import Rating from "./Rating";
import Type from "./Type";
import TypeBrand from "./TypeBrand";
import User from "./User";

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);

Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

export {
  Basket,
  BasketDevice,
  Brand,
  Device,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand,
  User
};
