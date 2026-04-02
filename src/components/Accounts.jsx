import { useApp } from "../context/AppContext";

export default function Accounts() {
  const { transactions } = useApp();

  // Example accounts (static for now)
  const accounts = [
    { id: 1, name: "HDFC Bank", type: "Savings", balance: 85000 },
    { id: 2, name: "ICICI Bank", type: "Current", balance: 42000 },
    { id: 3, name: "Paytm Wallet", type: "Wallet", balance: 8000 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">

      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Accounts
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {accounts.map((acc) => (
          <div
            key={acc.id}
            className="p-5 rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <h4 className="text-gray-500">{acc.type}</h4>

            <p className="text-xl font-bold text-gray-800">
              {acc.name}
            </p>

            <p className="text-green-600 font-semibold mt-2">
              ₹{acc.balance.toLocaleString()}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Available Balance
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}