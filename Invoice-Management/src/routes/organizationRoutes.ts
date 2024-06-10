// organizationRoutes.ts
import express from "express";
import * as organizationController from "../controllers/organizationController";

const router = express.Router();

router.post("/organizations", organizationController.createOrganization);
router.get("/organizations", organizationController.getOrganizations);
router.get("/organizations/:id", organizationController.getOrganizationById);
router.put("/organizations/:id", organizationController.updateOrganization);
router.delete("/organizations/:id", organizationController.deleteOrganization);

export default router;
