import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={e => {
          e.preventDefault();
          const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
          };
          addTransaction(newTransaction);
        }}
      >
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={event => {
              setText(event.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            onChange={event => {
              setAmount(event.target.value);
            }}
          />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
