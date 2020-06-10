import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvier, GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
