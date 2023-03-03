import React from 'react';
import { Pagination } from './Pagination';

export function Controls({ tableControls, children }) {
  return (
    <>
      {children}
      <Pagination controls={tableControls.pagination} />
    </>
  );
}
