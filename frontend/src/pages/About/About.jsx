const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Hero */}
      <div className="text-center">

        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
          About Our Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Transforming Healthcare
          <br />
          With Technology
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
          ApniDr helps patients connect with trusted doctors,
          book appointments instantly, and get AI-powered
          healthcare guidance anytime.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        <div className="bg-white border rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            500+
          </h2>
          <p className="mt-2 text-gray-500">
            Doctors
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            10K+
          </h2>
          <p className="mt-2 text-gray-500">
            Patients
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            25+
          </h2>
          <p className="mt-2 text-gray-500">
            Specialities
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            24/7
          </h2>
          <p className="mt-2 text-gray-500">
            Support
          </p>
        </div>

      </div>

      {/* Features */}
      <div className="mt-20">

        <h2 className="text-3xl font-bold text-center">
          Why Patients Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="border rounded-2xl p-8 hover:shadow-xl transition">

            <div className="text-5xl">
              👨‍⚕️
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Verified Doctors
            </h3>

            <p className="text-gray-500 mt-3">
              Connect with experienced and trusted doctors.
            </p>

          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl transition">

            <div className="text-5xl">
              🤖
            </div>

            <h3 className="text-xl font-semibold mt-4">
              AI Assistant
            </h3>

            <p className="text-gray-500 mt-3">
              Get instant health suggestions and support.
            </p>

          </div>

          <div className="border rounded-2xl p-8 hover:shadow-xl transition">

            <div className="text-5xl">
              📅
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Easy Booking
            </h3>

            <p className="text-gray-500 mt-3">
              Book appointments quickly without hassle.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;