import { useNavigate } from "react-router-dom";
import { AiRobot } from "../../assets";

const AIBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-blue-500
        px-6
        md:px-12
        py-6
        md:py-8
        flex
        flex-col-reverse
        md:flex-row
        items-center
        justify-between
        gap-10
        "
      >

        {/* Background Blur Effect */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        {/* Left Content */}
        <div className="relative z-10 text-white text-center md:text-left max-w-2xl">

          <span
            className="
            inline-block
            bg-white/20
            backdrop-blur-sm
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            mb-4
            "
          >
            🤖 AI Powered Healthcare
          </span>

          <h2
            className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            leading-tight
            "
          >
            Ask AI Assistant
            <br />
            For Instant Help
          </h2>

          <p
            className="
            mt-5
            text-sm
            sm:text-base
            md:text-lg
            text-white/90
            "
          >
            Book appointments, analyze symptoms,
            get doctor recommendations and receive
            personalized healthcare guidance instantly.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">

            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              🩺 Symptom Checker
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              📅 Smart Booking
            </span>

            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              👨‍⚕️ Doctor Suggestions
            </span>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <button
              onClick={() => navigate("/ai-assistant")}
              className="
              bg-white
              text-indigo-600
              px-6
              py-3
              rounded-full
              font-semibold
              hover:bg-gray-100
              transition
              "
            >
              Chat With AI
            </button>

            <button
              onClick={() => navigate("/about")}
              className="
              border
              border-white
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              hover:bg-white
              hover:text-indigo-600
              transition
              "
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center">

          <img
            src={AiRobot}
            alt="AI Assistant"
            className="
            w-40
            sm:w-48
            md:w-56
            lg:w-64
            object-contain
            drop-shadow-2xl
            "
          />

        </div>

      </div>

    </section>
  );
};

export default AIBanner;