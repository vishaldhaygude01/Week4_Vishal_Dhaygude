import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Invoice extends Model {}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    totalInvoiceValue: DataTypes.FLOAT,
    sowId: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("Drafted", "Cancelled", "Approved"),
      allowNull: false,
    },
    invoiceSentOn: DataTypes.DATE,
    customerId: DataTypes.STRING,
    paymentReceivedOn: DataTypes.DATE,
    invoiceVersionNumber: DataTypes.STRING,
    invoiceAmount: DataTypes.FLOAT,
    invoiceTaxAmount: DataTypes.FLOAT,
  },
  {
    sequelize,
    modelName: "Invoice",
  }
);

export default Invoice;
