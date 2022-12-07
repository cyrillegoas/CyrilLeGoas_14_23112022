import React from 'react';
import { Layout } from '../components/Layout';
import { PeopleHeader } from '../components/PeopleHeader';
import { PeopleTable } from '../components/PeopleTable';

export function People() {
  return (
    <Layout>
      <PeopleHeader />
      <PeopleTable />
    </Layout>
  );
}
