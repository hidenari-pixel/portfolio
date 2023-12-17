import { Badge, Group, type MantineColor } from '@mantine/core';

type Props = {
  color?: MantineColor;
  labels: string[];
};

export const BadgesGroup = ({ color = 'indigo', labels }: Props) => {
  return (
    <Group gap="xs">
      {labels.map((label) => (
        <Badge
          color={color}
          key={label}
          size="lg"
          style={{ textTransform: 'none' }}
        >
          {label}
        </Badge>
      ))}
    </Group>
  );
};
