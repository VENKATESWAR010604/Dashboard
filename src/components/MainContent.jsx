import Charts from "./Charts";
import Transactions from "./Transactions";
import Insights from "./Insights";
import Accounts from "./Accounts";
import Analytics from "./Analytics";
import Investments from "./Investments";
import Budgets from "./Budgets";

export default function MainContent() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 rounded-xl">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-1">
        Dashboard Overview
      </h2>

      <p className="text-gray-500 mb-6">
        Track your money, performance, and trends — all in one place.
      </p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* Income */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Monthly Income</h4>
          <p className="text-2xl font-bold">$38,420</p>
          <p className="text-green-500 text-sm">+11.2% last month</p>
        </div>

        {/* Expense */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Monthly Expense</h4>
          <p className="text-2xl font-bold">$24,910</p>
          <p className="text-red-500 text-sm">-5.3% last month</p>
        </div>

        {/* Balance */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-5 rounded-xl shadow">
          <h4>Total Balance</h4>
          <p className="text-2xl font-bold">$124,580.45</p>

          <div className="flex gap-3 mt-4">
            <button className="bg-white text-purple-600 px-3 py-1 rounded text-sm">
              Send
            </button>
            <button className="bg-white text-purple-600 px-3 py-1 rounded text-sm">
              Receive
            </button>
          </div>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h4 className="mb-3 font-semibold text-gray-800">
          Cash Flow
        </h4>
        <Charts />
      </div>

      {/* TRANSACTIONS SECTION */}
      <Transactions />

      <Insights/>
      <Accounts/>
      <Analytics/>
      <Investments/>
      <Budgets/>
      

    </div>
  );
}