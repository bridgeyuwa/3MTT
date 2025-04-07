import React from 'react';

function ListComponent({ items, renderItem }) {
  if (!items.length) return <p>No items to display.</p>;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default ListComponent;
