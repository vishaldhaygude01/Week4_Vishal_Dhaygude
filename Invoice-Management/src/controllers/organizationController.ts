import { Request, Response } from "express";
import * as organizationService from "../services/organizationService";

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.createOrganization(req.body);
    res.status(201).json(organization);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getOrganizations = async (_req: Request, res: Response) => {
  try {
    const organizations = await organizationService.getOrganizations();
    res.status(200).json(organizations);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const getOrganizationById = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.getOrganizationById(
      req.params.id
    );
    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: "Organization not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const updateOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.updateOrganization(
      req.params.id,
      req.body
    );
    res.status(200).json(organization);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export const deleteOrganization = async (req: Request, res: Response) => {
  try {
    await organizationService.deleteOrganization(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};
