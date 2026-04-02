import { useState } from "react";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@finance.com" && password === "123456") {
      setUser({ role: "admin" });
    } else if (email === "viewer@finance.com" && password === "123456") {
      setUser({ role: "viewer" });
    } else {
      alert("Invalid credentials");
    }
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
            Skip repetitive and manual finance tasks. Get highly productive through automation and save tons of time!
          </p>

          <p className="mt-20 text-sm opacity-70">
            © 2026 Finance Dashboard. All rights reserved.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 px-6">

        <div className="w-full max-w-md">

          <h2 className="text-xl font-semibold mb-6">Finance</h2>

          <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>

          <p className="text-gray-500 text-sm mb-6">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              Create a new account now
            </span>
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border-b border-gray-300 p-2 mb-5 outline-none focus:border-black"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 p-2 mb-6 outline-none focus:border-black"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded mb-4 hover:opacity-90"
          >
            Login Now
          </button>

          {/* Google Button */}
          <button className="w-full border border-gray-300 py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5"
              alt="google"
            />
            Login with Google
          </button>

          {/* Forgot */}
          <p className="text-sm text-center mt-4">
            Forgot password?{" "}
            <span className="text-blue-600 cursor-pointer">Click here</span>
          </p>

          {/* Demo credentials */}
          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>Admin: admin@finance.com / password:123456</p>
            <p>Viewer: viewer@finance.com /password: 123456</p>
          </div>

        </div>
      </div>
    </div>
  );
}