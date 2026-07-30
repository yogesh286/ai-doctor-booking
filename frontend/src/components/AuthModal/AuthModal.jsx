import { useState } from "react";
import axios from "axios";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (isLogin) {
        const { data } =
          await axios.post(
            "https://ai-doctor-booking.onrender.com/api/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login Success ✅");

        onClose();

        window.location.reload();
      } else {
        await axios.post(
          "https://ai-doctor-booking.onrender.com/api/auth/register",
          {
            name,
            phone,
            email,
            password,
          }
        );

        alert(
          "Account Created Successfully ✅"
        );

        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      px-4
      "
    >
      <div
        className="
        bg-white
        w-full
        max-w-md
        rounded-3xl
        p-8
        relative
        "
      >
        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          text-2xl
          "
        >
          ×
        </button>

        <div className="flex mb-8 bg-slate-100 rounded-xl p-1">

          <button
            onClick={() => setIsLogin(true)}
            className={`
            flex-1
            py-3
            rounded-xl
            ${
              isLogin
                ? "bg-indigo-600 text-white"
                : ""
            }
            `}
          >
            Login
          </button>

          <button
            onClick={() =>
              setIsLogin(false)
            }
            className={`
            flex-1
            py-3
            rounded-xl
            ${
              !isLogin
                ? "bg-indigo-600 text-white"
                : ""
            }
            `}
          >
            Register
          </button>

        </div>

        <h2 className="text-3xl font-bold text-center">

          {isLogin
            ? "Welcome Back"
            : "Create Account"}

        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                className="
                w-full
                border
                rounded-xl
                p-4
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
                className="
                w-full
                border
                rounded-xl
                p-4
                "
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            w-full
            border
            rounded-xl
            p-4
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
            w-full
            border
            rounded-xl
            p-4
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-indigo-600
            text-white
            py-4
            rounded-xl
            hover:bg-indigo-700
            transition
            "
          >
            {loading
              ? "Please Wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default AuthModal;