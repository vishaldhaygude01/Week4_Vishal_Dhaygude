"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Customer extends sequelize_1.Model {
}
Customer.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    organizationId: sequelize_1.DataTypes.STRING,
    msaValidity: sequelize_1.DataTypes.DATE,
    legalName: sequelize_1.DataTypes.STRING,
    ndaSigningInformation: sequelize_1.DataTypes.STRING,
    addressId: sequelize_1.DataTypes.STRING,
    displayName: sequelize_1.DataTypes.STRING,
    ndaMsaStatus: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.default,
    modelName: "Customer",
});
exports.default = Customer;
