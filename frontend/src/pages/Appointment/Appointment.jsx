import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Appointment = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const { data } = await axios.get(
        `https://ai-doctor-booking.onrender.com/api/doctors/${id}`
      );

      setDoctor(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please Login First");
        return;
      }

      await axios.post(
        "https://ai-doctor-booking.onrender.com/api/appointments/book",
        {
          doctor: id,
          appointmentDate: selectedDate,
          appointmentTime: selectedTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Appointment Booked Successfully 🎉");

      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Booking Failed"
      );
    }
  };

  const handlePayment = async () => {
   
    if (!selectedDate || !selectedTime) {
      alert("Please Select Date & Time");
      return;
    }

    try {
        console.log("Razorpay Key:", import.meta.env.VITE_RAZORPAY_KEY);
    console.log("Razorpay Object:", window.Razorpay);
    
      setLoading(true);

      const { data } = await axios.post(
        "https://ai-doctor-booking.onrender.com/api/payment/create-order",
        {
          amount: doctor.fee,
        }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,

        amount: data.amount,

        currency: data.currency,

        order_id: data.id,

        name: "AI Doctor Booking",

        description: "Doctor Appointment",

        handler: async function () {
          await handleBooking();
        },

        prefill: {
          name: JSON.parse(
            localStorage.getItem("user")
          )?.name,

          email: JSON.parse(
            localStorage.getItem("user")
          )?.email,
        },

        theme: {
          color: "#4f46e5",
        },
      };

      const razorpay = new window.Razorpay(
        options
      );

      razorpay.open();

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!doctor) {
    return (
      <div className="text-center py-20 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold">
        Book Appointment
      </h1>

      <p className="text-gray-500 mt-2">
        Select your preferred date and
        time.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-10">

        {/* Doctor Card */}

        <div className="border rounded-3xl overflow-hidden shadow">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">

            <h2 className="text-3xl font-bold">
              {doctor.name}
            </h2>

            <p className="text-indigo-600 mt-2">
              {doctor.speciality}
            </p>

            <div className="mt-5 space-y-2">

              <p>
                ⭐ {doctor.rating}
              </p>

              <p>
                🩺 {doctor.experience}
              </p>

              <p>
                🎓 {doctor.education}
              </p>

              <p>
                💰 Consultation Fee :
                ₹{doctor.fee}
              </p>

            </div>

          </div>

        </div>

        {/* Booking Card */}

        <div className="border rounded-3xl p-6 shadow">

          <label className="font-semibold">

            Select Date

          </label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }
            className="w-full border rounded-xl p-3 mt-3"
          />

          <h3 className="text-2xl font-bold mt-8">

            Available Slots

          </h3>

          <div className="grid grid-cols-2 gap-4 mt-5">

            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() =>
                  setSelectedTime(slot)
                }
                className={`py-3 rounded-xl border transition ${
                  selectedTime === slot
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "hover:border-indigo-600"
                }`}
              >
                {slot}
              </button>
            ))}

          </div>

          <div className="mt-8 bg-slate-100 rounded-2xl p-5">

            <h3 className="font-bold text-lg">

              Appointment Summary

            </h3>

            <p className="mt-3">
              📅 {selectedDate || "-"}
            </p>

            <p>
              ⏰ {selectedTime || "-"}
            </p>

            <p>
              👨‍⚕️ {doctor.name}
            </p>

            <p>
              💰 ₹{doctor.fee}
            </p>

          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition"
          >
            {loading
              ? "Processing..."
              : `Pay ₹${doctor.fee} & Book Appointment`}
          </button>

        </div>

      </div>

    </section>
  );
};

export default Appointment;