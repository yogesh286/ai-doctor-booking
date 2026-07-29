import { Link } from "react-router-dom";
import { specialities } from "../../data/specialities";

const Specialities = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Top Specialities
          </h2>

          <p className="text-gray-500 mt-2">
            Find the right specialist for your healthcare needs.
          </p>
        </div>

        <Link
          to="/specialities"
          className="
          hidden
          md:block
          bg-indigo-600
          text-white
          px-5
          py-3
          rounded-xl
          hover:bg-indigo-700
          transition
          "
        >
          View All
        </Link>

      </div>

      {/* Specialities Grid */}
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-7
        gap-5
        "
      >
        {specialities.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="
            group
            bg-white
            border
            rounded-3xl
            p-5
            text-center
            cursor-pointer
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >

            <div
              className="
              text-5xl
              mb-4
              group-hover:scale-110
              transition
              "
            >
              {item.icon}
            </div>

            <h3 className="font-semibold text-sm md:text-base">
              {item.name}
            </h3>

          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="flex justify-center mt-8 md:hidden">

        <Link
          to="/specialities"
          className="
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-indigo-700
          transition
          "
        >
          View All Specialities
        </Link>

      </div>

    </section>
  );
};

export default Specialities;