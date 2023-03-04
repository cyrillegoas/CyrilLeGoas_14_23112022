import React from 'react';
import { styled } from '../../stitches.config';
import { departments } from '../utils/utils';
import { Bar } from './Bar';

const StyledDiv = styled('div', {
  display: 'flex',
});

export function BarChart({ nbOfEmployees, data }) {
  return (
    <StyledDiv>
      {data.map((item) =>
        item.nbOfEmployeesInDep ? (
          <Bar
            key={item.name}
            color={departments.colors[item.name].background}
            width={`${(item.nbOfEmployeesInDep * 100) / nbOfEmployees}%`}
            tooltip={`${item.nbOfEmployeesInDep} ${item.name}`}
          />
        ) : null
      )}
    </StyledDiv>
  );
}
