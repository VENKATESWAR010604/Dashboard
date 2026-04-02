import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  // 🔹 ROLE STATE
  const [user, setUser] = useState({
    role: "admin", // or "viewer"
  });

  // 🔹 TRANSACTIONS DATA
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2025-04-02", amount: 200, category: "Food", type: "expense" },
    { id: 3, date: "2025-04-03", amount: 1000, category: "Freelance", type: "income" },
    { id: 4, date: "2025-04-04", amount: 300, category: "Shopping", type: "expense" },
  ]);

  // 🔹 FILTERS
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        transactions,
        setTransactions,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// CUSTOM HOOK
export const useApp = () => useContext(AppContext);