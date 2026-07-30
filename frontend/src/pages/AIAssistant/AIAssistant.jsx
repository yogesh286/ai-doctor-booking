import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AIAssistant = () => {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I'm your AI Health Assistant. Describe your symptoms and I'll help you.",
    },
  ]);

  const [loading, setLoading] =
    useState(false);

  const [
    recommendedDoctors,
    setRecommendedDoctors,
  ] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentMessage =
      message;

    setMessage("");

    try {
      setLoading(true);

      const { data } =
        await axios.post(
          "https://ai-doctor-booking.onrender.com/api/ai/chat",
          {
            message:
              currentMessage,
          }
        );

      const aiMessage = {
        sender: "ai",
        text: data.reply,
      };

      setChat((prev) => [
        ...prev,
        aiMessage,
      ]);

      setRecommendedDoctors(
        data.doctors || []
      );

    } catch (error) {
      console.log(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ AI service unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="text-center">

        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
          🤖 AI Healthcare Assistant
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          AI Health Assistant
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Get symptom guidance,
          doctor recommendations
          and healthcare support.
        </p>

      </div>

      {/* Feature Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <div className="border rounded-3xl p-6">
          <div className="text-5xl">
            🩺
          </div>

          <h3 className="text-xl font-bold mt-4">
            Symptom Checker
          </h3>

          <p className="text-gray-500 mt-3">
            Analyze symptoms instantly.
          </p>
        </div>

        <div className="border rounded-3xl p-6">
          <div className="text-5xl">
            👨‍⚕️
          </div>

          <h3 className="text-xl font-bold mt-4">
            Doctor Recommendation
          </h3>

          <p className="text-gray-500 mt-3">
            Find the right specialist.
          </p>
        </div>

        <div className="border rounded-3xl p-6">
          <div className="text-5xl">
            📅
          </div>

          <h3 className="text-xl font-bold mt-4">
            Smart Booking
          </h3>

          <p className="text-gray-500 mt-3">
            AI helps schedule appointments.
          </p>
        </div>

      </div>

      {/* Chat Section */}

      <div className="mt-16 border rounded-3xl overflow-hidden shadow-sm">

        <div className="bg-indigo-600 text-white p-5">

          <h2 className="text-xl font-semibold">
            AI Chat Assistant
          </h2>

        </div>

        <div className="h-[500px] overflow-y-auto p-6 bg-slate-50">

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-xl px-5 py-3 rounded-2xl whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex">

              <div className="bg-white border px-5 py-3 rounded-2xl">

                🤖 Thinking...

              </div>

            </div>
          )}

        </div>

        <div className="p-4 border-t flex gap-3">

          <input
            type="text"
            placeholder="Describe your symptoms..."
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleSend()
            }
            className="
            flex-1
            border
            rounded-xl
            px-4
            py-3
            "
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="
            bg-indigo-600
            text-white
            px-6
            rounded-xl
            "
          >
            Send
          </button>

        </div>

      </div>

      {/* Recommended Doctors */}

      {recommendedDoctors.length >
        0 && (
        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Recommended Doctors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {recommendedDoctors.map(
              (doctor) => (
                <div
                  key={doctor._id}
                  className="
                  border
                  rounded-3xl
                  overflow-hidden
                  hover:shadow-xl
                  transition
                  "
                >

                  <img
                    src={doctor.image}
                    alt=""
                    className="
                    h-60
                    w-full
                    object-cover
                    "
                  />

                  <div className="p-5">

                    <h3 className="font-bold text-xl">
                      {doctor.name}
                    </h3>

                    <p className="text-gray-500">
                      {doctor.speciality}
                    </p>

                    <p className="mt-2">
                      ⭐ {doctor.rating}
                    </p>

                    <p>
                      ₹{doctor.fee}
                    </p>

                    <Link
                      to={`/doctors/${doctor._id}`}
                      className="
                      inline-block
                      mt-4
                      bg-indigo-600
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      "
                    >
                      View Profile
                    </Link>

                  </div>

                </div>
              )
            )}

          </div>

        </div>
      )}

    </section>
  );
};

export default AIAssistant;
