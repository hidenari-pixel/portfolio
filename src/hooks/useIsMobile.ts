import { em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useIsMobile = () => {
  return useMediaQuery(`(max-width: ${em(767)})`);
};
