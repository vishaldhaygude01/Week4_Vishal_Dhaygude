"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganization = exports.updateOrganization = exports.getOrganizationById = exports.getOrganizations = exports.createOrganization = void 0;
const organizationService = __importStar(require("../services/organizationService"));
const createOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield organizationService.createOrganization(req.body);
        res.status(201).json(organization);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.createOrganization = createOrganization;
const getOrganizations = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield organizationService.getOrganizations();
        res.status(200).json(organizations);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.getOrganizations = getOrganizations;
const getOrganizationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield organizationService.getOrganizationById(req.params.id);
        if (organization) {
            res.status(200).json(organization);
        }
        else {
            res.status(404).json({ message: "Organization not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.getOrganizationById = getOrganizationById;
const updateOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield organizationService.updateOrganization(req.params.id, req.body);
        res.status(200).json(organization);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.updateOrganization = updateOrganization;
const deleteOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield organizationService.deleteOrganization(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error" });
        }
    }
});
exports.deleteOrganization = deleteOrganization;
