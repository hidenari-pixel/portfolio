import { Box, Stack, Text, Timeline, Title, getFontSize } from '@mantine/core';
import { BadgesGroup } from './BadgesGroup';
import { CAREERS } from '../consts/careers';
import { useColor } from '../hooks/useColor';

export const Careers = () => {
  const { getColor } = useColor();

  return (
    <Stack w="100%">
      <Title order={2}>経歴</Title>
      <Timeline
        active={1}
        bulletSize={14}
        lineWidth={2}
        styles={{
          item: {
            border: 'none',
          },
        }}
      >
        {CAREERS.map(({ title, period, techs, description }) => (
          <Timeline.Item
            key={title}
            styles={{
              itemTitle: {
                fontSize: getFontSize('lg'),
                fontWeight: 'bold',
              },
              itemBullet: {
                background: getColor('indigo'),
                border: 'none',
              },
            }}
            title={title}
          >
            <Text c="dark.3" size="sm">
              {period}
            </Text>
            <Box maw="600" py="xs">
              <BadgesGroup color="dark" labels={techs} />
            </Box>
            <Text>{description}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Stack>
  );
};
