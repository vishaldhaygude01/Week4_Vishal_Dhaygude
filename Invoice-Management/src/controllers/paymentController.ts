
import { Request, Response } from "express";
import * as paymentService from "../services/paymentService";

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getPayments = async (_req: Request, res: Response) => {
  try {
    const payments = await paymentService.getPayments();
    res.status(200).json(payments);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.updatePayment(req.params.id, req.body);
    res.status(200).json(payment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    await paymentService.deletePayment(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};
