"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    paymentDate: sequelize_1.DataTypes.DATE,
    forexAmount: sequelize_1.DataTypes.FLOAT,
    currency: sequelize_1.DataTypes.STRING,
    indianAmount: sequelize_1.DataTypes.FLOAT,
    invoiceId: sequelize_1.DataTypes.STRING,
    isFullPayment: sequelize_1.DataTypes.BOOLEAN,
    bankPaymentDetails: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.default,
    modelName: "Payment",
});
exports.default = Payment;
