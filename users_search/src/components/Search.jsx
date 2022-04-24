import React from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div>
      <input
        value={searchValue}
        type="text"
        placeholder="Type here..."
        onChange={event => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
