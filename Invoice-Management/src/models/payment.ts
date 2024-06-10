import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    paymentDate: DataTypes.DATE,
    forexAmount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    indianAmount: DataTypes.FLOAT,
    invoiceId: DataTypes.STRING,
    isFullPayment: DataTypes.BOOLEAN,
    bankPaymentDetails: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Payment",
  }
);

export default Payment;
