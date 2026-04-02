export default function Investments() {
  const investments = [
    { id: 1, name: "Apple", type: "Stock", value: 50000, change: 5.2 },
    { id: 2, name: "Bitcoin", type: "Crypto", value: 75000, change: -2.4 },
    { id: 3, name: "Tesla", type: "Stock", value: 42000, change: 3.1 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Investments
      </h3>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {investments.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
          >
            <h4 className="text-gray-500 text-sm">{item.type}</h4>

            <p className="text-lg font-bold text-gray-800">
              {item.name}
            </p>

            <p className="text-xl font-semibold mt-2">
              ₹{item.value.toLocaleString()}
            </p>

            <p
              className={`text-sm mt-1 ${
                item.change > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change > 0 ? "+" : ""}
              {item.change}%
            </p>
          </div>
        ))}

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">

          <thead>
            <tr className="text-gray-400 text-xs uppercase border-b">
              <th className="py-3 text-left">Asset</th>
              <th className="text-left">Type</th>
              <th className="text-left">Value</th>
              <th className="text-left">Change</th>
            </tr>
          </thead>

          <tbody>
            {investments.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">

                <td className="py-3 font-medium text-gray-800">
                  {item.name}
                </td>

                <td className="text-gray-600">
                  {item.type}
                </td>

                <td className="font-semibold">
                  ₹{item.value.toLocaleString()}
                </td>

                <td
                  className={`${
                    item.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change > 0 ? "+" : ""}
                  {item.change}%
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}