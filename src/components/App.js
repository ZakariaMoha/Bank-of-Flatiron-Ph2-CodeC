import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionFilter from './TransactionFilter';
import AddTransactionForm from './AddTransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <TransactionTable transactions={transactions} />
      <TransactionFilter />
      <AddTransactionForm onAddTransaction={setTransactions} />
    </div>
  );
};

export default App;
