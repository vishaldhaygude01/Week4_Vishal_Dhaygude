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
exports.deleteInvoice = exports.updateInvoice = exports.getInvoiceById = exports.getInvoices = exports.createInvoice = void 0;
const invoice_1 = __importDefault(require("../models/invoice"));
const createInvoice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield invoice_1.default.create(data);
});
exports.createInvoice = createInvoice;
const getInvoices = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield invoice_1.default.findAll();
});
exports.getInvoices = getInvoices;
const getInvoiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield invoice_1.default.findByPk(id);
});
exports.getInvoiceById = getInvoiceById;
const updateInvoice = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoice_1.default.findByPk(id);
    if (invoice) {
        return yield invoice.update(data);
    }
    throw new Error("Invoice not found");
});
exports.updateInvoice = updateInvoice;
const deleteInvoice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoice_1.default.findByPk(id);
    if (invoice) {
        return yield invoice.destroy();
    }
    throw new Error("Invoice not found");
});
exports.deleteInvoice = deleteInvoice;
