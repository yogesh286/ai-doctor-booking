import { Logo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-blue-500 p-t-12 mt-12 text-white">




      <div className="
        max-w-7xl
        mx-auto
        px-4
        py-12
        grid
        md:grid-cols-4
        gap-10
      ">

        <div>
          <img
            src={Logo}
            alt=""
            className="h-12"
          />

          <p className="mt-4 text-gray-300">
            AI Powered Doctor Appointment
            Booking Platform.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Doctors</li>
            <li>AI Assistant</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            For Patients
          </h3>

          <ul className="space-y-2">
            <li>Book Appointment</li>
            <li>Health Tips</li>
            <li>Symptom Checker</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contact
          </h3>

          <p>Email: support@apnidr.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;