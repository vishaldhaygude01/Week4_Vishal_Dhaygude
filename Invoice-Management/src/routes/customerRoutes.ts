// customerRoutes.ts
import express from "express";
import * as customerController from "../controllers/customerController";

const router = express.Router();

router.post("/customers", customerController.createCustomer);
router.get("/customers", customerController.getCustomers);
router.get("/customers/:id", customerController.getCustomerById);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

export default router;
