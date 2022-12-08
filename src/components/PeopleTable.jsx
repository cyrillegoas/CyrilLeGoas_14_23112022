import React from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { peoples } from '../mockData';
import { styled } from '../../stitches.config';
import { Table } from './Table';
import { TableHead } from './TableHead';
import { TableHeaderCell } from './TableHeaderCell';
import { Tablebody } from './TableBody';
import { TableCell } from './TableCell';

const StyledSection = styled('section', {
  background: '$colors$white',
  py: '1rem',
  margin: '2rem',
  border: '$borderStyles$table',
  borderRadius: '$radii$default',
});
const StyledTitle = styled('h2', {
  srOnly: true,
});

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
  }),
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
  columnHelper.accessor('dateFirstDayIn', {
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
          <tr>
            {table.getAllColumns().map((column) => (
              <TableHeaderCell key={column.id}>
                {column.columnDef.header}
              </TableHeaderCell>
            ))}
          </tr>
        </TableHead>
        <Tablebody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{cell.getValue()}</TableCell>
              ))}
            </tr>
          ))}
        </Tablebody>
      </Table>
    </StyledSection>
  );
}
