import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { SiQiita, SiZenn } from 'react-icons/si';
import { useIsMobile } from '../hooks/useIsMobile';
import { useColor } from '../hooks/useColor';
import { TECHS } from '../consts/techs';
import { UnStyledLink } from './UnStyledLink';
import { BadgesGroup } from './BadgesGroup';

export const Profile = () => {
  const isMobile = useIsMobile();

  const { getColor } = useColor();

  return (
    <Group gap="xl" justify={isMobile ? 'center' : 'space-between'}>
      <Stack align="center">
        <Avatar radius={100} size={isMobile ? 'xl' : 120}>
          <Image src="/thumbnail.jpeg" radius={100} />
        </Avatar>
        <Stack gap="xs" align="center">
          <Title order={2}>uchi</Title>
          <Text size="sm">3年目のシステムエンジニア</Text>
        </Stack>
        <IconGroup />
      </Stack>
      {!isMobile && <Divider size="xs" orientation="vertical" />}
      <Stack maw={isMobile ? '100%' : '60%'}>
        <Box>
          <Text>システムエンジニアのuchiです。</Text>
          <Text>システム開発の業務委託などもやっています。</Text>
          <Text>
            お仕事の依頼などはX(旧Twitter)のDMまたは
            <a href="/contact" style={{ color: getColor('blue') }}>
              こちら
            </a>
            にてお願いします。
          </Text>
        </Box>
        <Stack gap="sm">
          <Flex align="flex-end" gap="sm">
            <Title order={2}>技術スタック</Title>
            <Text size="sm">※実務レベル</Text>
          </Flex>
          <BadgesGroup labels={TECHS} />
        </Stack>
      </Stack>
    </Group>
  );
};

const IconGroup = () => (
  <Group>
    <ActionIcon size="lg">
      <UnStyledLink href="https://twitter.com/mZVi7KnlMVfNruU" target="_blank">
        <FaTwitter size={20} />
      </UnStyledLink>
    </ActionIcon>
    <ActionIcon size="lg" color="dark">
      <UnStyledLink href="https://github.com/hidenari-pixel" target="_blank">
        <FaGithub size={20} />
      </UnStyledLink>
    </ActionIcon>
    <ActionIcon size="lg" color="green">
      <UnStyledLink href="https://qiita.com/hide8800kasu" target="_blank">
        <SiQiita size={30} />
      </UnStyledLink>
    </ActionIcon>
    <ActionIcon size="lg">
      <UnStyledLink href="https://zenn.dev/n_o_n_a_m_e" target="_blank">
        <SiZenn size={20} />
      </UnStyledLink>
    </ActionIcon>
  </Group>
);
