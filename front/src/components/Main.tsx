import { Stack } from '@mantine/core';
import { Layout } from './Layout';
import { Profile } from './Profile';
import { Careers } from './Careers';

export const Main = () => {
  return (
    <Layout>
      <Stack gap="60" align="center">
        <Profile />
        <Careers />
      </Stack>
    </Layout>
  );
};
