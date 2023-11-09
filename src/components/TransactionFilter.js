import React, { useState } from 'react';

const TransactionFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    const term = event.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default TransactionFilter;
