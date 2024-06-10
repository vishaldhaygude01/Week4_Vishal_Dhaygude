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
exports.deletePayment = exports.updatePayment = exports.getPaymentById = exports.getPayments = exports.createPayment = void 0;
const payment_1 = __importDefault(require("../models/payment"));
const createPayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield payment_1.default.create(data);
});
exports.createPayment = createPayment;
const getPayments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield payment_1.default.findAll();
});
exports.getPayments = getPayments;
const getPaymentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield payment_1.default.findByPk(id);
});
exports.getPaymentById = getPaymentById;
const updatePayment = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const payment = yield payment_1.default.findByPk(id);
    if (payment) {
        return yield payment.update(data);
    }
    throw new Error("Payment not found");
});
exports.updatePayment = updatePayment;
const deletePayment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const payment = yield payment_1.default.findByPk(id);
    if (payment) {
        return yield payment.destroy();
    }
    throw new Error("Payment not found");
});
exports.deletePayment = deletePayment;
