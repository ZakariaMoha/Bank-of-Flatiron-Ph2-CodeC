import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) { 
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        { transactions.map((transaction) => 
        <Transaction 
        key={transaction.id}
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
        // onDelete={onDelete}
        />) }
      </tbody>
    </table>
  );
}

export default TransactionsList;