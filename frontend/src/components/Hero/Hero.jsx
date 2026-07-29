import {
  FaUserMd,
  FaCalendarCheck,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaRobot,
} from "react-icons/fa";
import { HeroDoctors } from "../../assets";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-5">
      <div className="relative h-[500px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#4F5CF6] via-[#5D67FF] to-[#7A84FF]">

        {/* Background Rings */}
        <div className="absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/10" />
        <div className="absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10" />

        {/* Left Content */}
        <div className="absolute left-10 top-12 z-30 max-w-[380px] text-white">
          <h1 className="text-[48px] leading-[62px] font-bold">
            Book Appointment
            <br />
            With Trusted
            <br />
            Doctors
          </h1>

          <p className="mt-5 text-[15px] text-white/80 max-w-[300px]">
            Find experienced doctors, book appointments instantly
            and get the best healthcare.
          </p>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-indigo-600 shadow-lg">
            Book Appointment
            <FaArrowRight />
          </button>
        </div>

        {/* Stats Card */}
        <div className="absolute left-10 bottom-8 z-30">
          <div className="flex gap-8 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-md">

            <div className="flex items-center gap-2">
              <FaUserMd className="text-lg" />
              <div>
                <h3 className="font-bold">500+</h3>
                <p className="text-xs text-white/70">
                  Doctors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarCheck className="text-lg" />
              <div>
                <h3 className="font-bold">50K+</h3>
                <p className="text-xs text-white/70">
                  Appointments
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-lg" />
              <div>
                <h3 className="font-bold">30K+</h3>
                <p className="text-xs text-white/70">
                  Patients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-lg" />
              <div>
                <h3 className="font-bold">4.8 ★</h3>
                <p className="text-xs text-white/70">
                  Average Rating
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Doctors Image */}
        <div className="absolute bottom-0 right-[180px] z-20">
          <img
            src={HeroDoctors}
            alt="Doctors"
            className="h-[560px] w-auto object-contain"
          />
        </div>

        {/* AI Assistant */}
        <div className="absolute right-8 top-1/2 z-30 w-[270px] -translate-y-1/2 rounded-[24px] bg-white p-5 shadow-2xl">

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
              <FaRobot className="text-indigo-600" />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                AI Health Assistant
              </h3>
              <p className="text-xs text-gray-500">
                Hi! I'm your AI assistant.
              </p>
            </div>
          </div>

          <p className="mb-4 text-sm text-gray-500">
            How can I help you today?
          </p>

          <div className="space-y-3">
            <button className="w-full rounded-xl border py-3 text-sm">
              📅 Book an appointment
            </button>

            <button className="w-full rounded-xl border py-3 text-sm">
              🩺 Check my symptoms
            </button>

            <button className="w-full rounded-xl border py-3 text-sm">
              📍 Find nearby doctors
            </button>

            <button className="w-full rounded-xl border py-3 text-sm">
              💡 General health tips
            </button>
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            />

            <button className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-indigo-600 text-white">
              →
            </button>
          </div>
        </div>

        {/* Floating Bot */}
        <div className="absolute bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
          <FaRobot className="text-xl text-indigo-600" />
        </div>

      </div>
    </section>
  );
};

export default Hero;