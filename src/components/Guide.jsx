export default function Guide() {
  const steps = [
    {
      title: "Dashboard Overview",
      desc: "View your balance, income, and expenses in one place.",
    },
    {
      title: "Transactions",
      desc: "Track all your income and expenses with filtering and search.",
    },
    {
      title: "Analytics",
      desc: "Understand spending patterns with charts and insights.",
    },
    {
      title: "Accounts",
      desc: "Manage multiple bank accounts and wallets.",
    },
    {
      title: "Budgets",
      desc: "Set limits and monitor your spending behavior.",
    },
    {
      title: "Settings",
      desc: "Customize your profile, notifications, and preferences.",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        User Guide
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {steps.map((step, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl hover:shadow-md transition"
          >
            <h4 className="font-semibold text-gray-800 mb-1">
              {step.title}
            </h4>

            <p className="text-sm text-gray-500">
              {step.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}