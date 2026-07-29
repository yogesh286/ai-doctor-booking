import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import api from "../../services/api";

const TopDoctors = () => {
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
    <section className="max-w-7xl mx-auto px-4 mt-8">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[28px] font-bold text-[#151B4F]">
          Top Rated Doctors
        </h2>

        <Link
          to="/doctors"
          className="text-indigo-600 text-sm font-semibold hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {doctors.slice(0, 8).map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-lg transition"
          >
            <div className="flex gap-3">

              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-[#151B4F]">
                  {doctor.name}
                </h3>

                <p className="text-indigo-600 text-sm">
                  {doctor.speciality}
                </p>

                <p className="text-gray-500 text-sm">
                  {doctor.experience}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span>{doctor.rating || 4.8}</span>
                  </div>

                  <span className="font-semibold">
                    ₹{doctor.fee}
                  </span>
                </div>
              </div>

            </div>

            <Link
              to={`/doctors/${doctor._id}`}
              className="block w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-lg"
            >
              Book Now
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TopDoctors;