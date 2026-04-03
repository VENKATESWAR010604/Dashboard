import Charts from "./Charts";
import Transactions from "./Transactions";
import Insights from "./Insights";
import Accounts from "./Accounts";
import Analytics from "./Analytics";
import Investments from "./Investments";
import Budgets from "./Budgets";

export default function MainContent() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Dashboard Overview
      </h2>

      <p className="text-gray-500 mb-6">
        Track your money, performance, and trends — all in one place.
      </p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        {/* Income */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h4 className="text-gray-500 mb-2">Monthly Income</h4>
          <p className="text-3xl font-bold text-gray-900">$38,420</p>
          <p className="text-green-500 text-sm mt-1">+11.2% last month</p>
        </div>

        {/* Expense */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h4 className="text-gray-500 mb-2">Monthly Expense</h4>
          <p className="text-3xl font-bold text-gray-900">$24,910</p>
          <p className="text-red-500 text-sm mt-1">-5.3% last month</p>
        </div>

        {/* Balance */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h4 className="mb-2 opacity-90">Total Balance</h4>
          <p className="text-3xl font-bold">$124,580.45</p>

          <div className="flex gap-3 mt-4">
            <button className="bg-white text-purple-600 px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 transition">
              Send
            </button>
            <button className="bg-white text-purple-600 px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 transition">
              Receive
            </button>
          </div>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h4 className="mb-4 font-semibold text-gray-800">
          Cash Flow
        </h4>
        <Charts />
      </div>

      {/* OTHER SECTIONS */}
      <div className="space-y-6">
        <Transactions />
        <Insights />
        <Accounts />
        <Analytics />
        <Investments />
        <Budgets />
      </div>

    </div>
  );
}