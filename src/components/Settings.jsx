import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Settings
      </h3>

      <div className="space-y-6">

        {/* PROFILE */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Profile
          </h4>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 px-3 py-2 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* PREFERENCES */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Preferences
          </h4>

          {/* Notifications */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700">Enable Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                notifications ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  notifications ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-indigo-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  darkMode ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

        </div>

        {/* SECURITY */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">
            Security
          </h4>

          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
            Change Password
          </button>
        </div>

      </div>

    </div>
  );
}