"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.getCustomers = exports.createCustomer = void 0;
const customer_1 = __importDefault(require("../models/customer"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_1.default.create(data);
});
exports.createCustomer = createCustomer;
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_1.default.findAll();
});
exports.getCustomers = getCustomers;
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_1.default.findByPk(id);
});
exports.getCustomerById = getCustomerById;
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_1.default.findByPk(id);
    if (customer) {
        return yield customer.update(data);
    }
    throw new Error("Customer not found");
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_1.default.findByPk(id);
    if (customer) {
        return yield customer.destroy();
    }
    throw new Error("Customer not found");
});
exports.deleteCustomer = deleteCustomer;
