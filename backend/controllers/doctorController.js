import Doctor from "../models/Doctor.js";


// Get All Doctors
export const getDoctors = async (
  req,
  res
) => {
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


// Get Single Doctor
export const getDoctorById =
  async (req, res) => {
    try {
      const doctor =
        await Doctor.findById(
          req.params.id
        );

      if (!doctor) {
        return res.status(404).json({
          message:
            "Doctor not found",
        });
      }

      res.status(200).json(
        doctor
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// Search + Filter Doctors
export const searchDoctors =
  async (req, res) => {
    try {
      const {
        keyword,
        speciality,
      } = req.query;

      let query = {};

      if (keyword) {
        query.name = {
          $regex: keyword,
          $options: "i",
        };
      }

      if (speciality) {
        query.speciality =
          speciality;
      }

      const doctors =
        await Doctor.find(query);

      res.status(200).json(
        doctors
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// Create Doctor
export const createDoctor =
  async (req, res) => {
    try {
      const doctor =
        await Doctor.create(
          req.body
        );

      res.status(201).json({
        success: true,
        doctor,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// Update Doctor
export const updateDoctor =
  async (req, res) => {
    try {
      const doctor =
        await Doctor.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      if (!doctor) {
        return res.status(404).json({
          message:
            "Doctor not found",
        });
      }

      res.status(200).json({
        success: true,
        doctor,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// Delete Doctor
export const deleteDoctor =
  async (req, res) => {
    try {
      const doctor =
        await Doctor.findById(
          req.params.id
        );

      if (!doctor) {
        return res.status(404).json({
          message:
            "Doctor not found",
        });
      }

      await doctor.deleteOne();

      res.status(200).json({
        success: true,
        message:
          "Doctor deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };