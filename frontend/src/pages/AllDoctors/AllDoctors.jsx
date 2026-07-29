import { useEffect, useState } from "react";
import api from "../../services/api";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data } = await api.get("/doctors");
      setDoctors(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Doctors
      </h1>

      {doctors.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Loading Doctors...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default AllDoctors;