import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminRoutes
from "./routes/adminRoutes.js";
import aiRoutes
from "./routes/aiRoutes.js";
import paymentRoutes
from "./routes/paymentRoutes.js";



console.log("JWT_SECRET =", process.env.JWT_SECRET);
console.log(
  "GEMINI =",
  process.env.GEMINI_API_KEY
);

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/doctors",
  doctorRoutes
);
app.use(
  "/api/appointments",
  appointmentRoutes
);
app.use(
  "/api/admin",
  adminRoutes
);
app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/payment",
  paymentRoutes
);

app.get("/", (req, res) => {
  res.send("ApniDr Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});