import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-600 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-10">
        Admin Panel
      </h2>

      <div className="space-y-4">

        <Link
          to="/admin/dashboard"
          className="block"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/doctors"
          className="block"
        >
          Manage Doctors
        </Link>

        <Link
          to="/admin/patients"
          className="block"
        >
          Manage Patients
        </Link>

        <Link
          to="/admin/appointments"
          className="block"
        >
          Appointments
        </Link>

      </div>

    </div>
  );
};

export default Sidebar;