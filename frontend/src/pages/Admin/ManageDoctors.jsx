import Sidebar from "../../components/Admin/Sidebar";

const ManageDoctors = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Manage Doctors
        </h1>

        <button
          className="
          bg-indigo-600
          text-white
          px-5
          py-3
          rounded-xl
          "
        >
          Add Doctor
        </button>

      </div>

    </div>
  );
};

export default ManageDoctors;