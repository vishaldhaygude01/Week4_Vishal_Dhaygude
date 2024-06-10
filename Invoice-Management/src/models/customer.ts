import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    organizationId: DataTypes.STRING,
    msaValidity: DataTypes.DATE,
    legalName: DataTypes.STRING,
    ndaSigningInformation: DataTypes.STRING,
    addressId: DataTypes.STRING,
    displayName: DataTypes.STRING,
    ndaMsaStatus: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Customer",
  }
);

export default Customer;
