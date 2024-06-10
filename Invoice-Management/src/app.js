"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Logger middleware
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.url}`);
    next();
});
// Routes
app.use("/api", organizationRoutes_1.default);
app.use("/api", customerRoutes_1.default);
app.use("/api", sowRoutes_1.default);
app.use("/api", invoiceRoutes_1.default);
app.use("/api", paymentRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    logger_1.default.error(err.message);
    res.status(500).json({ error: "Internal server error" });
});
exports.default = app;
