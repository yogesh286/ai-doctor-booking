import Sidebar from "../../components/Admin/Sidebar";

const ManagePatients = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Manage Patients
        </h1>

      </div>

    </div>
  );
};

export default ManagePatients;