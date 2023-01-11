import React from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
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

import { peoples } from '../mockData';

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
  const table = useReactTable({
    data: peoples,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledSection>
      <StyledTitle>table</StyledTitle>
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
    </StyledSection>
  );
}
