import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

        <div className="flex items-center justify-between">

          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="h-12 md:h-14"
            />
          </Link>

          <ul
            className="
            hidden md:flex
            items-center gap-8
            text-[15px]
            font-medium
            "
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/doctors">
                All Doctors
              </Link>
            </li>

            <li>
              <Link to="/ai-assistant">
                AI Assistant
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">

            {user ? (
              <>
                <Link
                  to="/my-appointments"
                  className="
                  hidden md:block
                  font-medium
                  "
                >
                  My Appointments
                </Link>

                <span
                  className="
                  hidden md:block
                  font-medium
                  "
                >
                  👤 {user.name}
                </span>

                <button
                  onClick={logoutHandler}
                  className="
                  bg-red-500
                  text-white
                  px-5
                  py-2
                  rounded-xl
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() =>
                  setIsModalOpen(true)
                }
                className="
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-6
                py-3
                rounded-full
                "
              >
                Create Account
              </button>
            )}

          </div>

        </div>

      </nav>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      />
    </>
  );
};

export default Navbar;