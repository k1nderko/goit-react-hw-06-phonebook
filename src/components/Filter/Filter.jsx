import React from 'react';

export const Filter = ({ value, onChange }) => {
  return <input type="text" name="filter" value={value} onChange={onChange} />;
};
