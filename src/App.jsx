import React from 'react';
import { Layout } from './components/Layout';
import { PeopleHeader } from './components/PeopleHeader';
import { PeopleTable } from './components/PeopleTable';

export function App() {
  return (
    <Layout>
      <PeopleHeader />
      <PeopleTable />
    </Layout>
  );
}
