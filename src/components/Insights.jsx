export default function Insights() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6 mb-6">

      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Insights
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Highest Spending */}
        <div className="p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-gray-500">
            Highest Spending
          </p>
          <h4 className="text-lg font-semibold text-red-600">
            Food 🍔
          </h4>
          <p className="text-sm text-gray-500">
            ₹12,500 this month
          </p>
        </div>

        {/* Monthly Comparison */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-500">
            Monthly Change
          </p>
          <h4 className="text-lg font-semibold text-yellow-600">
            +12% Expenses
          </h4>
          <p className="text-sm text-gray-500">
            Compared to last month
          </p>
        </div>

        {/* Observation */}
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-500">
            Observation
          </p>
          <h4 className="text-lg font-semibold text-green-600">
            Savings Improved 💰
          </h4>
          <p className="text-sm text-gray-500">
            You saved more this month
          </p>
        </div>

      </div>
    </div>
  );
}