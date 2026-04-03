import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return <Dashboard user={user} setUser={setUser} />;
}