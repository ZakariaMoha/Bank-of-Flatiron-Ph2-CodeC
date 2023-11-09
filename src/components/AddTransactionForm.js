import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Check if any of the fields are empty
    if (!newTransaction.date || !newTransaction.description || !newTransaction.amount) {
      // Handle the error or prevent submission
      console.error('Please fill out all fields.');
      return;
    }

    onAddTransaction(newTransaction);

    // Reset the form
    setNewTransaction({ date: '', description: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date: </label>
      <input
        type="text"
        name="date"
        value={newTransaction.date}
        onChange={handleChange}
      />
      <label>Description: </label>
      <input
        type="text"
        name="description"
        value={newTransaction.description}
        onChange={handleChange}
      />
      <label>Amount: </label>
      <input
        type="text"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
