import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  const fetchDoctor = async () => {
    try {
      const { data } = await api.get(`/doctors/${id}`);
      setDoctor(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!doctor) {
    return (
      <div className="text-center py-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex">

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-2/3 p-8">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            ● Available
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {doctor.name}
          </h1>

          <p className="text-indigo-600 text-lg mt-2">
            {doctor.speciality}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500">Experience</p>
              <h3 className="font-semibold">
                {doctor.experience}
              </h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500">Fee</p>
              <h3 className="font-semibold">
                ₹{doctor.fee}
              </h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500">Education</p>
              <h3 className="font-semibold">
                {doctor.education}
              </h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-500">Languages</p>
              <h3 className="font-semibold">
                {doctor.languages}
              </h3>
            </div>

          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">
              About Doctor
            </h2>

            <p className="text-gray-600 leading-7">
              {doctor.about}
            </p>
          </div>

          <div className="mt-8 flex gap-4">

            <Link
              to={`/appointment/${doctor._id}`}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl"
            >
              Book Appointment
            </Link>

            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50">
              ❤️ Favourite
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DoctorDetails;