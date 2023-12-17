import { em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useResponsive = () => {
  return useMediaQuery(`(max-width: ${em(767)})`);
};
