import { useState } from "react";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ HANDLE LOGIN
  const handleLogin = () => {
    if (email === "admin@finance.com" && password === "123456") {
      setUser({ role: "admin", name: "Admin" });
    } else if (email === "viewer@finance.com" && password === "123456") {
      setUser({ role: "client", name: "Client" });
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ DIRECT LOGIN
  const loginAdmin = () => {
    setUser({ role: "admin", name: "Admin" });
  };

  const loginClient = () => {
    setUser({ role: "client", name: "Client" });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-blue-700 text-white items-center p-16">
        <div className="max-w-md">
          <div className="text-6xl mb-6">✳️</div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Hello <br /> Finance! 👋
          </h1>

          <p className="text-lg opacity-90">
            Skip repetitive and manual finance tasks. Get highly productive through automation.
          </p>

          <p className="mt-20 text-sm opacity-70">
            © 2026 Finance Dashboard. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 px-6 py-10 lg:py-0 min-h-screen">

        <div className="w-full max-w-md">

          <h2 className="text-xl font-semibold mb-6">Welcome Back!</h2>
          <h3 className="text-2xl font-bold mb-2">Finance Bank</h3>

          {/* DIRECT LOGIN */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={loginAdmin}
              className="flex-1 bg-blue-600 text-white py-2 rounded"
            >
              Admin Login
            </button>

            <button
              onClick={loginClient}
              className="flex-1 bg-green-600 text-white py-2 rounded"
            >
              Client Login
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-300 p-3 mb-5 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-gray-300 p-3 mb-6 outline-none"
          />

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded mb-4 hover:opacity-90"
          >
            Login Now
          </button>

          {/* DEMO */}
          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>Admin: admin@finance.com / password: 123456</p>
            <p>Client: viewer@finance.com / password: 123456</p>
          </div>

        </div>
      </div>
    </div>
  );
}