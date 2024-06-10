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
exports.deleteOrganization = exports.updateOrganization = exports.getOrganizationById = exports.getOrganizations = exports.createOrganization = void 0;
const organization_1 = __importDefault(require("../models/organization"));
const createOrganization = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield organization_1.default.create(data);
});
exports.createOrganization = createOrganization;
const getOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield organization_1.default.findAll();
});
exports.getOrganizations = getOrganizations;
const getOrganizationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield organization_1.default.findByPk(id);
});
exports.getOrganizationById = getOrganizationById;
const updateOrganization = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield organization_1.default.findByPk(id);
    if (organization) {
        return yield organization.update(data);
    }
    throw new Error("Organization not found");
});
exports.updateOrganization = updateOrganization;
const deleteOrganization = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield organization_1.default.findByPk(id);
    if (organization) {
        return yield organization.destroy();
    }
    throw new Error("Organization not found");
});
exports.deleteOrganization = deleteOrganization;
