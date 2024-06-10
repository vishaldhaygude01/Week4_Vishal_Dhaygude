"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceEmailAddresses: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    customerId: sequelize_1.DataTypes.STRING,
    customerPONumber: sequelize_1.DataTypes.STRING,
    title: sequelize_1.DataTypes.STRING,
    customerSONumber: sequelize_1.DataTypes.STRING,
    validityPeriod: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    totalValue: sequelize_1.DataTypes.FLOAT,
    currency: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.default,
    modelName: "SOW",
});
exports.default = SOW;
