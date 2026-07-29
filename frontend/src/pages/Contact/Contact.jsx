const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Heading */}
      <div className="text-center">

        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
          Contact Us
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          We're Here To Help
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          Have questions about appointments, doctors,
          or our AI assistant? Reach out to us anytime.
        </p>

      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        {/* Form */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Send Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-indigo-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-indigo-500
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              focus:border-indigo-500
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="
              w-full
              border
              rounded-xl
              p-4
              outline-none
              resize-none
              focus:border-indigo-500
              "
            ></textarea>

            <button
              type="submit"
              className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              py-4
              rounded-xl
              font-medium
              transition
              "
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Info */}
        <div>

          <div className="border rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">
                  📧 Email
                </h3>

                <p className="text-gray-600 mt-2">
                  support@apnidr.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  📞 Phone
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 9876543210
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  📍 Address
                </h3>

                <p className="text-gray-600 mt-2">
                  Jaipur, Rajasthan, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  🕒 Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Mon - Sun : 24/7 Support
                </p>
              </div>

            </div>

          </div>

          {/* Map Placeholder */}
          <div
            className="
            mt-8
            h-64
            rounded-3xl
            bg-slate-100
            flex
            items-center
            justify-center
            text-gray-500
            text-lg
            "
          >
            🗺️ Google Map Location
          </div>

        </div>

      </div>

      {/* FAQ */}
      <div className="mt-20">

        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto mt-10 space-y-4">

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold">
              How do I book an appointment?
            </h3>
            <p className="text-gray-600 mt-2">
              Search for a doctor, view their profile,
              and click on Book Appointment.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold">
              Is the AI assistant free?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, the AI assistant can provide
              basic healthcare guidance for free.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-semibold">
              Can I cancel appointments?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, appointments can be cancelled
              from your dashboard.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;