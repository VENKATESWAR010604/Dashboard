import {
  Home,
  BarChart2,
  Repeat,
  Wallet,
  TrendingUp,
  FileText,
  PieChart,
  Target,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";

export default function Sidebar({ active, setActive, setUser }) {
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
    <div className="hidden lg:flex flex-col w-64 h-screen fixed top-0 left-0 bg-black p-4">

      <div className="w-full h-full overflow-y-auto rounded-2xl bg-gradient-to-b from-[#0f172a]/80 to-[#020617]/90 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)] p-5 flex flex-col">

        {/* Branding */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            <span className="text-white font-bold text-lg">F</span>
          </div>

          <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Finance Dashboard
          </h2>
        </div>

        <Menu className="text-white mb-6" />

        {/* Menu */}
        <ul className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`
                  flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                  ${
                    active === item.name
                      ? "bg-blue-500/20 text-blue-400 border border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </li>
            );
          })}
        </ul>

        {/* Bottom */}
        <div className="mt-auto space-y-4 pt-6">
          <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
            
            
          </div>

          {/* Logout */}
          <div
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
            className="flex items-center gap-3 text-gray-400 hover:text-red-400 cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </div>
        </div>

      </div>
    </div>
  );
}