import { specialities } from "../../data/specialities";

const AllSpecialities = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          All Medical Specialities
        </h1>

        <p className="text-gray-500 mt-4">
          Find doctors from every medical specialty.
        </p>

      </div>

      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-6
        mt-12
        "
      >

        {specialities.map((item, index) => (
          <div
            key={index}
            className="
            bg-white
            border
            rounded-3xl
            p-6
            text-center
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            cursor-pointer
            "
          >

            <div className="text-6xl mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold">
              {item.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AllSpecialities;