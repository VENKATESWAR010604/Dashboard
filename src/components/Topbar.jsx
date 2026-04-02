import { useState } from "react";
import { Bell } from "lucide-react";

export default function Topbar({ user, setUser, setActive }) {
  const [showProfile, setShowProfile] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "Admin",
    email: user?.email || "admin@mail.com",
    role: user?.role || "Admin",
    image: user?.image || "https://i.pravatar.cc/100",
    password: "",
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 IMAGE UPLOAD
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm({ ...form, image: url });
    }
  };

  // 🔥 SAVE PROFILE
  const handleSave = () => {
    setUser(form);
    localStorage.setItem("user", JSON.stringify(form));
    setShowProfile(false);
  };

  return (
    <div className="fixed top-0 left-64 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0f172a] border-b border-gray-700">

      {/* LEFT */}
      <h1 className="text-white text-lg font-semibold">
        Hello, {user?.name || "User"} 👋
      </h1>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative">

        {/* 🔔 Notification */}
        <Bell className="text-gray-400 hover:text-white cursor-pointer" />

        {/* 👤 PROFILE */}
        <div className="relative">

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={form.image}
              className="w-8 h-8 rounded-full border border-gray-600"
            />
            <span className="text-white text-sm">
              {user?.name || "User"}
            </span>
          </div>

          {/* 🔥 DROPDOWN PANEL */}
          {showProfile && (
            <div className="absolute right-0 mt-3 w-72 bg-[#020617] border border-gray-700 rounded-xl shadow-xl p-5 z-[999]">

              <h3 className="text-white font-semibold mb-4">
                Edit Profile
              </h3>

              {/* IMAGE */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={form.image}
                  className="w-12 h-12 rounded-full"
                />
                <input
                  type="file"
                  onChange={handleImage}
                  className="text-xs text-gray-400"
                />
              </div>

              {/* NAME */}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full mb-2 px-3 py-2 rounded bg-[#0f172a] text-white border border-gray-600 outline-none"
              />

              {/* EMAIL */}
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-2 px-3 py-2 rounded bg-[#0f172a] text-white border border-gray-600 outline-none"
              />

              {/* ROLE */}
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full mb-2 px-3 py-2 rounded bg-[#0f172a] text-white border border-gray-600"
              >
                <option>Admin</option>
                <option>Viewer</option>
              </select>

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="New Password"
                onChange={handleChange}
                className="w-full mb-4 px-3 py-2 rounded bg-[#0f172a] text-white border border-gray-600 outline-none"
              />

              {/* BUTTONS */}
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:opacity-90"
                >
                  Save
                </button>

                <button
                  onClick={() => setShowProfile(false)}
                  className="flex-1 bg-gray-600 text-white py-2 rounded"
                >
                  Cancel
                </button>
              </div>

            </div>
          )}
        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
}