const Register = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border rounded-3xl p-8 shadow-sm">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join ApniDr today
        </p>

        <form className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="
            w-full
            bg-indigo-600
            text-white
            py-4
            rounded-xl
            "
          >
            Create Account
          </button>

        </form>

      </div>

    </section>
  );
};

export default Register;