import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MainContent from "./MainContent";
import Transactions from "./Transactions";
import Analytics from "./Analytics";
import Accounts from "./Accounts";
import Insights from "./Insights";
import Settings from "./Settings";
import Investments from "./Investments";
import Budgets from "./Budgets";
import Guide from "./Guide";

export default function Dashboard({ user, setUser }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar
        active={active}
        setActive={setActive}
        setUser={setUser}
      />

      {/* MAIN AREA */}
      <div className="flex-1 ml-64 bg-[#020617] min-h-screen">

        {/* 🔥 TOPBAR (FIX HERE) */}
        <Topbar
          user={user}
          setUser={setUser}
          setActive={setActive}   // ✅ ADD THIS
        />

        {/* CONTENT */}
        <div className="pt-20 px-6">

          {active === "Dashboard" && <MainContent />}
          {active === "Transactions" && <Transactions />}
          {active === "Analytics" && <Analytics />}
          {active === "Accounts" && <Accounts />}
          {active === "Insights" && <Insights />}
          {active === "Settings" && <Settings />}
          {active === "Investments" && <Investments />}
          {active === "Budgets" && <Budgets />}
          {active === "Guide" && <Guide />}

        </div>

      </div>
    </div>
  );
}
