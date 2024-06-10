import { Request, Response } from "express";
import * as sowService from "../services/sowService";

export const createSOW = async (req: Request, res: Response) => {
  try {
    const sow = await sowService.createSOW(req.body);
    res.status(201).json(sow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getSOWs = async (_req: Request, res: Response) => {
  try {
    const sows = await sowService.getSOWs();
    res.status(200).json(sows);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getSOWById = async (req: Request, res: Response) => {
  try {
    const sow = await sowService.getSOWById(req.params.id);
    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ message: "SOW not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const updateSOW = async (req: Request, res: Response) => {
  try {
    const sow = await sowService.updateSOW(req.params.id, req.body);
    res.status(200).json(sow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const deleteSOW = async (req: Request, res: Response) => {
  try {
    await sowService.deleteSOW(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};
