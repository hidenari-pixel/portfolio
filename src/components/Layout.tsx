import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Container,
  Flex,
  Group,
  MantineProvider,
  NavLink,
  Stack,
  Text,
  Title,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { GoChevronRight } from 'react-icons/go';
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { UnStyledLink } from './UnStyledLink';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const isMobile = useIsMobile();

  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => setIsOpened(!isOpened);

  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 0,
          breakpoint: 'sm',
          collapsed: { mobile: !isOpened },
        }}
        footer={{ height: 60 }}
        py="lg"
        px="md"
      >
        <AppShell.Header>
          <Flex h="100%" px="md" justify="space-between" align="center">
            <Group>
              <Burger
                opened={isOpened}
                onClick={handleToggle}
                hiddenFrom="sm"
                size="sm"
              />
              <UnStyledLink href="/">
                <Title order={isMobile ? 3 : 1} c="dark">
                  uchi's Portfolio
                </Title>
              </UnStyledLink>
            </Group>
            <HeaderLinks />
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar hiddenFrom="sm">
          <Stack align="center" justify="center" py="xl" px="xl">
            <NavLink
              href="/"
              label="ホーム"
              rightSection={<GoChevronRight />}
            />
            <NavLink
              href="/contact"
              label="お問い合わせ"
              rightSection={<GoChevronRight />}
            />
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main pt={120}>
          <Container size="md">{children}</Container>
        </AppShell.Main>
        <Box mt={60} />
        <AppShell.Footer px="xl">
          <Flex h="100%" align="center">
            <Text c="dark">&copy;2023 uchi. All rights reserved.</Text>
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
};

const HeaderLinks = () => {
  const theme = useMantineTheme();

  return (
    <Group gap="xs">
      <ActionIcon size="lg" variant="subtle">
        <UnStyledLink
          href="https://twitter.com/mZVi7KnlMVfNruU"
          target="_blank"
        >
          <FaTwitter size={24} color={getThemeColor('blue', theme)} />
        </UnStyledLink>
      </ActionIcon>
      <ActionIcon size="lg" variant="subtle">
        <UnStyledLink href="https://github.com/hidenari-pixel" target="_blank">
          <FaGithub size={24} color={getThemeColor('dark', theme)} />
        </UnStyledLink>
      </ActionIcon>
    </Group>
  );
};
