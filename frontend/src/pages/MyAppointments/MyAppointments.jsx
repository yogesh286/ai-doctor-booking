import { useEffect, useState } from "react";
import axios from "axios";

const MyAppointments = () => {
  const [appointments,
    setAppointments] =
    useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const { data } =
          await axios.get(
            "https://ai-doctor-booking.onrender.com/api/appointments/my",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setAppointments(data);

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-8">
        My Appointments
      </h1>

      <div className="space-y-5">

        {appointments.length === 0 ? (
          <div className="text-center">
            No Appointments Found
          </div>
        ) : (
          appointments.map(
            (appointment) => (
              <div
                key={appointment._id}
                className="
                border
                rounded-2xl
                p-5
                flex
                justify-between
                items-center
                "
              >
                <div>

                  <h3 className="font-bold">
                    {
                      appointment
                        .doctor?.name
                    }
                  </h3>

                  <p>
                    {
                      appointment
                        .doctor
                        ?.speciality
                    }
                  </p>

                  <p>
                    📅{" "}
                    {
                      appointment
                        .appointmentDate
                    }
                  </p>

                  <p>
                    ⏰{" "}
                    {
                      appointment
                        .appointmentTime
                    }
                  </p>

                </div>

                <span
                  className="
                  bg-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  {
                    appointment
                      .status
                  }
                </span>

              </div>
            )
          )
        )}

      </div>

    </section>
  );
};

export default MyAppointments;