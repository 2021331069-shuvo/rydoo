import express from "express";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import { changeRoleToOwner, addCar } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner);
ownerRouter.post("/add-car", protect, upload.single("image"), addCar);

export default ownerRouter;
