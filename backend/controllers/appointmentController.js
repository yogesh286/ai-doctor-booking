import Appointment from "../models/Appointment.js";


// Book Appointment
export const bookAppointment =
  async (req, res) => {
    try {
      const {
        doctor,
        appointmentDate,
        appointmentTime,
      } = req.body;

      const appointment =
        await Appointment.create({
          patient: req.user.id,
          doctor,
          appointmentDate,
          appointmentTime,
        });

      res.status(201).json({
        success: true,
        appointment,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// My Appointments
export const getMyAppointments =
  async (req, res) => {
    try {
      const appointments =
        await Appointment.find({
          patient: req.user.id,
        })
          .populate("doctor");

      res.status(200).json(
        appointments
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  // cancel Appointment
  export const cancelAppointment =
  async (req, res) => {
    try {
      const appointment =
        await Appointment.findById(
          req.params.id
        );

      if (!appointment) {
        return res.status(404).json({
          message:
            "Appointment not found",
        });
      }

      appointment.status =
        "Cancelled";

      await appointment.save();

      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };