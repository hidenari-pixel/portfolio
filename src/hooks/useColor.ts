import {
  getThemeColor,
  useMantineTheme,
  type MantineColor,
} from '@mantine/core';

export const useColor = () => {
  const theme = useMantineTheme();

  return { getColor: (color: MantineColor) => getThemeColor(color, theme) };
};
