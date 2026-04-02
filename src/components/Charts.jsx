import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", balance: 4000 },
  { name: "Feb", balance: 3000 },
  { name: "Mar", balance: 5000 },
  { name: "Apr", balance: 7000 },
  { name: "May", balance: 6000 },
];

export default function Charts() {
  return (
    <div
      className="
      bg-[#0f172a]
      border border-gray-700
      rounded-xl
      p-5
      shadow-lg
      "
    >
      <h2 className="text-white mb-4 text-lg font-semibold">
        Balance Overview
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            {/* Grid */}
            <CartesianGrid stroke="#1e293b" />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            {/* Y Axis */}
            <YAxis stroke="#94a3b8" />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #334155",
                color: "white",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#38bdf8"   // neon blue
              strokeWidth={3}
              dot={{ fill: "#38bdf8" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}