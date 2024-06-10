// invoiceRoutes.ts
import express from "express";
import * as invoiceController from "../controllers/invoiceController";

const router = express.Router();

router.post("/invoices", invoiceController.createInvoice);
router.get("/invoices", invoiceController.getInvoices);
router.get("/invoices/:id", invoiceController.getInvoiceById);
router.put("/invoices/:id", invoiceController.updateInvoice);
router.delete("/invoices/:id", invoiceController.deleteInvoice);

export default router;
