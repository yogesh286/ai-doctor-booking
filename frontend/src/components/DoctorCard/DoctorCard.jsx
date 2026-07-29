import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Doctor Image */}
      <div className="h-56 bg-slate-100">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Doctor Info */}
      <div className="p-5">

        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">
            {doctor.name}
          </h3>

          <span className="text-green-600 text-sm">
            ● Available
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          {doctor.speciality}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {doctor.experience}
        </p>

        <Link
          to={`/doctors/${doctor._id}`}
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl mt-5 font-medium transition"
        >
          View Profile
        </Link>

      </div>

    </div>
  );
};

export default DoctorCard;