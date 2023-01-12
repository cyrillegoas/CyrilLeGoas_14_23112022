import React from 'react';
import { Layout } from './components/Layout';
import { PeopleHeader } from './components/PeopleHeader';
import { PeopleTable } from './components/PeopleTable';
import { RosterStats } from './components/RosterStats';

export function App() {
  return (
    <Layout>
      <PeopleHeader />
      <RosterStats />
      <PeopleTable />
    </Layout>
  );
}
