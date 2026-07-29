import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    speciality: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    fee: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    education: {
      type: String,
      required: true,
    },

    languages: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    about: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model(
  "Doctor",
  doctorSchema
);

export default Doctor;