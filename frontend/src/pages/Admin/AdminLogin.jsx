const AdminLogin = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Admin Login
        </h1>

        <form className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-4 rounded-xl"
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
            Login
          </button>

        </form>

      </div>

    </section>
  );
};

export default AdminLogin;