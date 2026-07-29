import { useParams } from "react-router-dom";
import { doctors } from "../../data/doctorsData";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

const SpecialityDoctors = () => {
  const { speciality } = useParams();

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.speciality.toLowerCase() ===
      speciality.toLowerCase()
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          {speciality} Specialists
        </h1>

        <p className="text-gray-500 mt-2">
          Find the best {speciality} doctors.
        </p>

      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No Doctors Found
          </h2>
        </div>
      ) : (
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))}
        </div>
      )}

    </section>
  );
};

export default SpecialityDoctors;