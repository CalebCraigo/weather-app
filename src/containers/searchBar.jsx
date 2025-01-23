

import React, { useState } from 'react';

function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

//   const filteredData = data.filter((item) => {
//     return item.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default SearchBar;