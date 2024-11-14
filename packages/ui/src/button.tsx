"use client";

import { Button as MantineButton } from '@mantine/core';

interface ButtonProps {
  children: React.ReactNode;
  appName?: string;
}

export function Button({ children, appName }: ButtonProps) {
  return (
    <MantineButton
      variant="filled"
      color="blue"
      data-app={appName}
    >
      {children}
    </MantineButton>
  );
}
