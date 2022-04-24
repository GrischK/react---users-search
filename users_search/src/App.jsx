import React from 'react';
import { useState  } from 'react';
import Search from './components/Search.jsx';
import './App.css';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const [users, setUsers] = useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin'
  ]);

  const filterUsers = users.filter(user => user.includes(searchValue));

  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search setSearchValue={setSearchValue}/>
      {filterUsers.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}