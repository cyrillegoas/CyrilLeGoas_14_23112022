import React from 'react';
import { useEmployees } from '../hooks/stores';
import { styled } from '../../stitches.config';
import { departments } from '../utils/utils';
import { peoples } from '../mockData';
import { BarChart } from './BarChart';

const StyledSection = styled('section', {
  background: '$colors$white',
  border: '$borderStyles$table',
  borderRadius: '$radii$default',
  marginBottom: '1rem',
  py: '2rem',
  fontSize: '1.5rem',
  fontWeight: '$bold',
  color: '$grey',
  display: 'flex',
});

const StyledTitle = styled('h2', {
  srOnly: true,
});

const StyledTotalWrapper = styled('div', {
  px: '2rem',
  borderRight: '$borderStyles$tableRow',
});

const StyledDistributionWrapper = styled('div', {
  flex: '1',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr',
  px: '2rem',
});

const StyledTotal = styled('span', {
  fontSize: '4rem',
  fontWeight: '$medium',
});

export function RosterStats() {
  // const employees = useEmployees();
  const employees = peoples;

  const nbOfEmployees = employees.length;

  const filterByDep = (employeesList, dep) =>
    employeesList.filter((employee) => employee.departement === dep);

  const depDistribution = [...departments.names].map((dep) => ({
    name: dep,
    nbOfEmployeesInDep: filterByDep(employees, dep).length,
  }));

  return (
    <StyledSection>
      <StyledTitle>Roster stats</StyledTitle>
      <StyledTotalWrapper>
        <StyledTotal>{nbOfEmployees}</StyledTotal> employees
      </StyledTotalWrapper>
      <StyledDistributionWrapper>
        Departement distribution
        <BarChart nbOfEmployees={nbOfEmployees} data={depDistribution} />
      </StyledDistributionWrapper>
    </StyledSection>
  );
}
