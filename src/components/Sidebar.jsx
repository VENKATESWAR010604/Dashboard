import { useState, useEffect } from "react";
import {
  Home,
  BarChart2,
  Repeat,
  Wallet,
  TrendingUp,
  PieChart,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

export default function Sidebar({ active, setActive, setUser }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("openSidebar", handleOpen);
    return () => window.removeEventListener("openSidebar", handleOpen);
  }, []);

  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Analytics", icon: BarChart2 },
    { name: "Transactions", icon: Repeat },
    { name: "Accounts", icon: Wallet },
    { name: "Investments", icon: TrendingUp },
    { name: "Insights", icon: TrendingUp },
    { name: "Budgets", icon: PieChart },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
    { name: "Guide", icon: HelpCircle },
  ];

  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 z-[999]
          w-64 h-[100dvh]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* 🔥 STRAIGHT EDGE GLOW BORDER */}
        <div
          className="w-full h-full overflow-y-auto p-5 flex flex-col
          bg-[#020617]
          border border-cyan-400/30
          shadow-[0_0_40px_rgba(34,211,238,0.4)]
          backdrop-blur-xl"
        >

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md">
                <span className="text-white font-bold text-lg">F</span>
              </div>

              <h2 className="text-white font-semibold text-lg tracking-wide">
                Finance Dashboard
              </h2>
            </div>

            <X
              className="text-white cursor-pointer lg:hidden"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* MENU */}
          <ul className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                  ${
                    active === item.name
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </li>
              );
            })}
          </ul>

          {/* LOGOUT */}
          <div
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
            className="mt-auto text-red-400 cursor-pointer"
          >
            Logout
          </div>

        </div>
      </div>
    </>
  );
}