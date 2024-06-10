// app.ts
import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import organizationRoutes from "./routes/organizationRoutes";
import customerRoutes from "./routes/customerRoutes";
import sowRoutes from "./routes/sowRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import logger from "./utils/logger";

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Logger middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api", organizationRoutes);
app.use("/api", customerRoutes);
app.use("/api", sowRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", paymentRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
