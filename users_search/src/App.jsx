import React from 'react';
import Search from './components/Search.jsx';
import './App.css';

export default function App() {
  const [users, setUsers] = React.useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin'
  ]);
  return (
    <div className="App">
      <h1>Users List</h1>
      <h2>Search for your favourite user!</h2>
      <Search />
      {users.map(user => (
        <p>{user}</p>
      ))}
    </div>
  );
}