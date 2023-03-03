import React, { useState } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEmployees } from '../hooks/stores';
import { styled } from '../../stitches.config';
import { Table } from './Table';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableHeaderCell } from './TableHeaderCell';
import { Tablebody } from './TableBody';
import { TableCell } from './TableCell';
import { Tag } from './Tag';
import { Controls } from './tableControls/Controls';

const StyledSection = styled('section', {
  background: '$colors$white',
  border: '$borderStyles$table',
  borderRadius: '$radii$default',
  overflow: 'auto',
});
const StyledTitle = styled('h2', {
  srOnly: true,
});

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('firstname', {
    header: 'Firstname',
  }),
  columnHelper.accessor('lastname', {
    header: 'Lastname',
  }),
  columnHelper.accessor('departement', {
    header: 'Departement',
  }),
  columnHelper.accessor('birthday', {
    header: 'Birthday',
  }),
  columnHelper.accessor('firstDayIn', {
    header: 'Start date',
  }),
  columnHelper.accessor('street', {
    header: 'Street',
  }),
  columnHelper.accessor('city', {
    header: 'City',
  }),
  columnHelper.accessor('state', {
    header: 'State',
  }),
  columnHelper.accessor('zipcode', {
    header: 'Zipcode',
  }),
];

export function PeopleTable() {
  const employees = useEmployees();
  const [globalFilter, setGlobalFilter] = useState('');
  const table = useReactTable({
    data: employees,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const tableControls = {
    pagination: {
      nextPage: table.nextPage,
      isNextPageAvailable: table.getCanNextPage(),
      previousPage: table.previousPage,
      isPreviousPageAvailable: table.getCanPreviousPage(),
      pageIndex: table.getState().pagination.pageIndex,
      rowsCount: employees.length,
      pageRowCount: table.getRowModel().rows.length,
      pageSize: table.getState().pagination.pageSize,
      setPageSize: table.setPageSize,
    },
    filter: {
      setFilterFn: setGlobalFilter,
    },
  };

  return (
    <StyledSection>
      <StyledTitle>table</StyledTitle>
      <Controls tableControls={tableControls}>
        <Table>
          <TableHead>
            <TableRow>
              {table.getAllColumns().map((column) => (
                <TableHeaderCell key={column.id}>
                  {column.columnDef.header}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <Tablebody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id === 'departement' ? (
                      <Tag>{cell.getValue()}</Tag>
                    ) : (
                      cell.getValue()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Tablebody>
        </Table>
      </Controls>
    </StyledSection>
  );
}
