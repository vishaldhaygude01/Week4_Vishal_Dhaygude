
import { Request, Response } from "express";
import * as invoiceService from "../services/invoiceService";

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getInvoices = async (_req: Request, res: Response) => {
  try {
    const invoices = await invoiceService.getInvoices();
    res.status(200).json(invoices);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getInvoiceById = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.getInvoiceById(req.params.id);
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ message: "Invoice not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const updateInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await invoiceService.updateInvoice(req.params.id, req.body);
    res.status(200).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    await invoiceService.deleteInvoice(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};
