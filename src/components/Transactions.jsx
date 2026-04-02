import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Transactions() {
  const { transactions } = useApp();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // FILTER
  const filtered = transactions
    .filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (filter === "all" ? true : item.type === filter));

  // 🔥 TEXT HIGHLIGHT
  const highlightText = (text) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span
          key={index}
          className="bg-yellow-200 text-black px-1 rounded"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">

        <h3 className="text-lg font-semibold text-gray-800">
          Transactions
        </h3>

        {/* CONTROLS */}
        <div className="flex flex-wrap gap-2">

          {/* 🔥 SEARCH INPUT WITH FOCUS HIGHLIGHT */}
          <input
            type="text"
            placeholder="Search category..."
            className="
              px-4 py-2 rounded-lg text-sm
              border border-gray-300
              bg-gray-50
              outline-none
              transition-all duration-200

              focus:bg-white
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-400
              focus:shadow-md
            "
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* FILTER */}
          <select
            className="
              px-3 py-2 rounded-lg text-sm
              border border-gray-200
              focus:ring-2 focus:ring-indigo-400
              outline-none
            "
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">

          <thead>
            <tr className="text-gray-400 text-xs uppercase border-b">
              <th className="py-3 text-left">Date</th>
              <th className="text-left">Category</th>
              <th className="text-left">Type</th>
              <th className="text-left">Amount</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >

                {/* DATE */}
                <td className="py-3 text-gray-600">
                  {item.date}
                </td>

                {/* CATEGORY */}
                <td className="font-medium text-gray-800">
                  {highlightText(item.category)}
                </td>

                {/* TYPE */}
                <td>
                  <span
                    className={`
                      px-3 py-1 text-xs font-medium rounded-full
                      ${
                        item.type === "income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {item.type}
                  </span>
                </td>

                {/* AMOUNT */}
                <td
                  className={`
                    font-semibold
                    ${
                      item.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  `}
                >
                  {item.type === "income" ? "+" : "-"}₹{item.amount}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}