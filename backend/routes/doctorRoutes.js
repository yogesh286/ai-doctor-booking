import express from "express";

import {
  getDoctors,
  getDoctorById,
  searchDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";
import protect from "../middleware/authMiddleware.js";
import { cancelAppointment } from "../controllers/appointmentController.js";

const router = express.Router();


// Get All Doctors
router.get(
  "/",
  getDoctors
);


// Search Doctors
router.get(
  "/search",
  searchDoctors
);


// Get Single Doctor
router.get(
  "/:id",
  getDoctorById
);


// Create Doctor
router.post(
  "/",
  createDoctor
);


// Update Doctor
router.put(
  "/:id",
  updateDoctor
);


// Delete Doctor
router.delete(
  "/:id",
  deleteDoctor
);

// cancel Appointment
router.put(
  "/cancel/:id",
  protect,
  cancelAppointment
);

export default router;