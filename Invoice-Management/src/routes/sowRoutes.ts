// sowRoutes.ts
import express from "express";
import * as sowController from "../controllers/sowController";

const router = express.Router();

router.post("/sows", sowController.createSOW);
router.get("/sows", sowController.getSOWs);
router.get("/sows/:id", sowController.getSOWById);
router.put("/sows/:id", sowController.updateSOW);
router.delete("/sows/:id", sowController.deleteSOW);

export default router;
