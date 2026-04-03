import { useState } from "react";
import { Bell, Menu } from "lucide-react";

export default function Topbar({ user, setUser, setActive }) {
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  // ✅ FIX: use user data properly
  const form = {
    name: user?.name || "User",
    role: user?.role || "Viewer",
    image: user?.image || "https://i.pravatar.cc/100",
  };

  const menu = [
    "Dashboard",
    "Transactions",
    "Analytics",
    "Accounts",
    "Investments",
    "Budgets",
    "Settings",
    "Guide",
  ];

  const filtered = menu.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 lg:left-64 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-gray-700">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <Menu
          size={26}
          className="text-white cursor-pointer lg:hidden"
          onClick={() => window.dispatchEvent(new Event("openSidebar"))}
        />

        {/* ✅ NAME FIX */}
        <h1 className="text-white text-sm sm:text-lg font-semibold">
          Hello, {form.name} 👋
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4 relative">

        {/* SEARCH */}
        <div className="relative w-32 sm:w-56">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#020617] text-gray-300 px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base rounded-lg border border-gray-700 focus:border-blue-400 outline-none"
          />

          {search && (
            <div className="absolute top-10 left-0 w-full bg-[#020617] border border-gray-700 rounded-lg shadow-lg z-[999]">
              {filtered.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActive(item);
                    setSearch("");
                  }}
                  className="px-3 py-2 text-sm text-gray-300 hover:bg-blue-500/20 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NOTIFICATION */}
        <Bell className="text-gray-400 hover:text-white cursor-pointer" />

        {/* PROFILE ICON */}
        <div onClick={() => setShowProfile(true)} className="cursor-pointer">
          <img
            src={form.image}
            className="w-8 h-8 rounded-full border border-gray-600"
          />
        </div>
      </div>

      {/* 🔥 PROFILE PANEL */}
      {showProfile && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/30 z-[998]"
            onClick={() => setShowProfile(false)}
          />

          {/* PANEL */}
          <div className="fixed top-16 right-4 w-72 bg-[#2f344a] z-[999] shadow-xl rounded-2xl p-5">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img
                  src={form.image}
                  className="w-12 h-12 rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2f344a]"></span>
              </div>

              <div>
                {/* ✅ NAME + ROLE FIX */}
                <h2 className="text-white text-base font-semibold">
                  {form.name}
                </h2>
                <p className="text-gray-300 text-xs capitalize">
                  {form.role}
                </p>
              </div>
            </div>

            <hr className="border-gray-500 mb-4" />

            {/* MENU */}
            <div className="space-y-3 text-white text-sm">

              <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                👤 Profile
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                ⚙️ Settings
              </div>

              <div className="flex items-center justify-between cursor-pointer hover:opacity-80">
                <div className="flex items-center gap-3">
                  💳 Billing
                </div>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  4
                </span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                💲 Pricing
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                ❓ FAQ
              </div>

            </div>

            {/* LOGOUT */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
              className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg text-sm font-semibold"
            >
              Logout →
            </button>

          </div>
        </>
      )}
    </div>
  );
}