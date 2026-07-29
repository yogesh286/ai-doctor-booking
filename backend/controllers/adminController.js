import User from "../models/User.js";
import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";


// Dashboard Stats
export const getDashboardStats = async (
  req,
  res
) => {
  try {

    const totalUsers =
      await User.countDocuments();

    const totalDoctors =
      await Doctor.countDocuments();

    const totalAppointments =
      await Appointment.countDocuments();

    res.status(200).json({
      totalUsers,
      totalDoctors,
      totalAppointments,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// All Users
export const getAllUsers = async (
  req,
  res
) => {
  try {

    const users =
      await User.find();

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// All Doctors
export const getAllDoctorsAdmin =
  async (req, res) => {
    try {

      const doctors =
        await Doctor.find();

      res.status(200).json(doctors);

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// All Appointments
export const getAllAppointments =
  async (req, res) => {
    try {

      const appointments =
        await Appointment.find()
          .populate("doctor")
          .populate("patient");

      res.status(200).json(
        appointments
      );

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };