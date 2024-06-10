import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class SOW extends Model {}

SOW.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceEmailAddresses: DataTypes.ARRAY(DataTypes.STRING),
    customerId: DataTypes.STRING,
    customerPONumber: DataTypes.STRING,
    title: DataTypes.STRING,
    customerSONumber: DataTypes.STRING,
    validityPeriod: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    totalValue: DataTypes.FLOAT,
    currency: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "SOW",
  }
);

export default SOW;
