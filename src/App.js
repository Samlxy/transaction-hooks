import React from "react";
import HandleTransactions from "./components/HandleTransactions";
import "./App.css";

function App() {
  const accounts = {
    accountBalance: 1500,
    savingsBalance: 2500
  }
  return (
    <div className="container">
      <HandleTransactions accounts={accounts} />
    </div>
  );
}

export default App;
