'use client';

import { type NotificationProps } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import type { ReactNode } from 'react';

type SnackbarOption =
  | string
  | {
      description?: ReactNode;
      title?: string;
    };

const createBaseSnackbarFn = (
  additionalOption: Omit<NotificationProps, 'message'>
) => {
  return (option: SnackbarOption) => {
    showNotification({
      radius: 'md',
      ...additionalOption,
      ...(typeof option === 'string'
        ? { message: option }
        : { message: option.description, title: option.title }),
    });
  };
};

export const useSnackbar = () => {
  const success = createBaseSnackbarFn({
    color: 'green',
  });

  const error = createBaseSnackbarFn({
    color: 'red',
  });

  return { error, success };
};
