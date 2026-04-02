import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { useApp } from "../context/AppContext";

export default function Analytics() {
  const { transactions } = useApp();

  // 🔹 CATEGORY DATA (Pie Chart)
  const categoryData = Object.values(
    transactions.reduce((acc, item) => {
      if (item.type === "expense") {
        acc[item.category] = acc[item.category] || {
          name: item.category,
          value: 0,
        };
        acc[item.category].value += item.amount;
      }
      return acc;
    }, {})
  );

  // 🔹 INCOME vs EXPENSE (Bar Chart)
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const barData = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
  ];

  const COLORS = ["#34d399", "#f87171", "#60a5fa", "#facc15"];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">

      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Analytics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PIE CHART */}
        <div>
          <h4 className="text-sm text-gray-500 mb-2">
            Spending by Category
          </h4>

          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  outerRadius={80}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BAR CHART */}
        <div>
          <h4 className="text-sm text-gray-500 mb-2">
            Income vs Expense
          </h4>

          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}