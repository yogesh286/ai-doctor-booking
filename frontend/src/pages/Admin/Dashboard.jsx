import Sidebar from "../../components/Admin/Sidebar";
import StatCard from "../../components/Admin/StatCard";

const Dashboard = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <StatCard
            title="Doctors"
            value="120"
          />

          <StatCard
            title="Patients"
            value="450"
          />

          <StatCard
            title="Appointments"
            value="1200"
          />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;