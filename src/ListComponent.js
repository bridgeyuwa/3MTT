import React from 'react';
import PropTypes from 'prop-types';

function ListComponent({ items, renderItem }) {
  if (!items.length) return <p className="info-msg">No items to display.</p>;
  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item.id} className="item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ListComponent;