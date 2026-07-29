import {
  FaShieldAlt,
  FaHeadset,
  FaCalendarAlt,
  FaLock,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Verified Doctors",
      desc: "All doctors are verified and highly experienced.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "We are always here to help you.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Easy Booking",
      desc: "Book appointment in just a few clicks.",
    },
    {
      icon: <FaLock />,
      title: "Secure & Safe",
      desc: "Your data is safe and secure with us.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">

      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[28px] font-bold text-[#151B4F]">
          Why Choose Us?
        </h2>

        <button className="text-indigo-600 text-sm font-semibold hover:underline">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-4
              flex
              items-start
              gap-4
              hover:shadow-md
              transition-all
            "
          >
            {/* Icon */}
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-indigo-50
                flex
                items-center
                justify-center
                text-indigo-600
                text-lg
                shrink-0
              "
            >
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-[15px] text-[#151B4F]">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseUs;