import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import AllDoctors from "../pages/AllDoctors/AllDoctors";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import Appointment from "../pages/Appointment/Appointment";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AIAssistant from "../pages/AIAssistant/AIAssistant";
import AllSpecialities from "../pages/AllSpecialities/AllSpecialities";
import SpecialityDoctors from "../pages/SpecialityDoctors/SpecialityDoctors";
import MyAppointments from "../pages/MyAppointments/MyAppointments";

import AdminLogin from "../pages/Admin/AdminLogin";
import Dashboard from "../pages/Admin/Dashboard";
import ManageDoctors from "../pages/Admin/ManageDoctors";
import ManagePatients from "../pages/Admin/ManagePatients";
import ManageAppointments from "../pages/Admin/ManageAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "doctors",
        element: <AllDoctors />,
      },

      {
        path: "doctors/:id",
        element: <DoctorDetails />,
      },

      {
        path: "appointment/:id",
        element: <Appointment />,
      },

      {
        path: "my-appointments",
        element: <MyAppointments />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "ai-assistant",
        element: <AIAssistant />,
      },

      {
        path: "specialities",
        element: <AllSpecialities />,
      },

      {
        path: "specialities/:speciality",
        element: <SpecialityDoctors />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/admin/doctors",
    element: <ManageDoctors />,
  },

  {
    path: "/admin/patients",
    element: <ManagePatients />,
  },

  {
    path: "/admin/appointments",
    element: <ManageAppointments />,
  },
]);

export default router;