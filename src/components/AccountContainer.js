
import React, { useEffect, useState } from "react";
//import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    //fetching data + searching
    fetch("http://localhost:8001/transactions" + search) 
      .then((resp) => resp.json())
      .then((data) => {
        setTransaction(data);

      })
      
  },[search])

  //function to add newTransaction
  function addTransaction (newTransaction) {
      const updatedTransaction = [...transactions, newTransaction];
      setTransaction(updatedTransaction);
  }

//handle search
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  // //Deletes transaction
  // function deleteTransaction (id) {
  //   const updatedTransaction = transactions.filter((transaction) => transaction.id !== id);
  //   setTransaction(updatedTransaction);
  // }

  return (
    <div>
      <Search 
      handleSearch={handleSearch}/>
      <AddTransactionForm 
    
      onTransactionSubmit={addTransaction} />
      
      <transactions 
      transactions={transactions}
      // onDelete={deleteTransaction}
      />
    </div>
  );
}

export default AccountContainer;