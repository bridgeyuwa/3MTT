import React, { useState, useEffect } from 'react';
import ListComponent from './ListComponent';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setItems(data);
        setFiltered(data);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      items.filter(item => item.title.toLowerCase().includes(q))
    );
  }, [query, items]);

  if (loading) return <p className="loading-msg">Loading data...</p>;
  if (error) return <p className="error-msg">Error: {error}</p>;

  return (
    <div className="app-container">
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <ListComponent
        items={filtered}
        renderItem={item => <span>{item.title}</span>}
      />
    </div>
  );
}

export default App;