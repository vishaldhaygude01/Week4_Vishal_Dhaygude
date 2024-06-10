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
exports.deleteSOW = exports.updateSOW = exports.getSOWById = exports.getSOWs = exports.createSOW = void 0;
const sow_1 = __importDefault(require("../models/sow"));
const createSOW = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sow_1.default.create(data);
});
exports.createSOW = createSOW;
const getSOWs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield sow_1.default.findAll();
});
exports.getSOWs = getSOWs;
const getSOWById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sow_1.default.findByPk(id);
});
exports.getSOWById = getSOWById;
const updateSOW = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const sow = yield sow_1.default.findByPk(id);
    if (sow) {
        return yield sow.update(data);
    }
    throw new Error("SOW not found");
});
exports.updateSOW = updateSOW;
const deleteSOW = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sow = yield sow_1.default.findByPk(id);
    if (sow) {
        return yield sow.destroy();
    }
    throw new Error("SOW not found");
});
exports.deleteSOW = deleteSOW;
