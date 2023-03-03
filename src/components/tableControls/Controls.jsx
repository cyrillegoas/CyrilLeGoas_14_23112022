import React from 'react';
import { Filter } from './Filter';
import { Pagination } from './Pagination';

export function Controls({ tableControls, children }) {
  return (
    <>
      <Filter setFilterFn={tableControls.filter.setFilterFn} />
      {children}
      <Pagination controls={tableControls.pagination} />
    </>
  );
}
