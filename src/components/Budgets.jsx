export default function Budgets() {
  const budgets = [
    { id: 1, category: "Food", limit: 10000, spent: 6500 },
    { id: 2, category: "Shopping", limit: 15000, spent: 12000 },
    { id: 3, category: "Travel", limit: 20000, spent: 21000 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Budgets
      </h3>

      <div className="space-y-5">

        {budgets.map((item) => {
          const percent = Math.min(
            (item.spent / item.limit) * 100,
            100
          );

          return (
            <div key={item.id}>

              {/* HEADER */}
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">
                  {item.category}
                </span>

                <span className="text-gray-500">
                  ₹{item.spent} / ₹{item.limit}
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`
                    h-full rounded-full
                    ${
                      item.spent > item.limit
                        ? "bg-red-500"
                        : percent > 70
                        ? "bg-yellow-400"
                        : "bg-green-500"
                    }
                  `}
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* STATUS */}
              <p
                className={`text-xs mt-1 ${
                  item.spent > item.limit
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                {item.spent > item.limit
                  ? "⚠ Over budget"
                  : "Within budget"}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}