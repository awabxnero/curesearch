import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transactions = () => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction => {
          const sign = transaction.amount < 0 ? "" : "+";
          return (
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
              {transaction.text}{" "}
              <span>
                {sign}
                {transaction.amount}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction._id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Transactions;
