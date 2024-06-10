"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Organization extends sequelize_1.Model {
}
Organization.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true, 
    },
    gstNo: sequelize_1.DataTypes.STRING,
    panNo: sequelize_1.DataTypes.STRING,
    legalOrganizationName: sequelize_1.DataTypes.STRING,
    invoiceTemplateId: sequelize_1.DataTypes.STRING,
    shortName: sequelize_1.DataTypes.STRING,
    contactName: sequelize_1.DataTypes.STRING,
    displayName: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    addressId: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.default,
    modelName: "Organization",
    timestamps: false, 
});
exports.default = Organization;
