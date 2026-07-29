import express from "express";

import {
  getDashboardStats,
  getAllUsers,
  getAllDoctorsAdmin,
  getAllAppointments,
} from "../controllers/adminController.js";

const router = express.Router();

router.get(
  "/dashboard",
  getDashboardStats
);

router.get(
  "/users",
  getAllUsers
);

router.get(
  "/doctors",
  getAllDoctorsAdmin
);

router.get(
  "/appointments",
  getAllAppointments
);

export default router;