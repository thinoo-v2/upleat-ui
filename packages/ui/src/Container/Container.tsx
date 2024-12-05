'use client';

import './Container.scss';
import { useMemo } from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ContainerVariant = 'default' | 'fluid';

const containerSizes: Record<ContainerSize, string> = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
} as const;

interface ContainerCSSProperties extends React.CSSProperties {
  '--container-sm'?: string;
  '--container-md'?: string;
  '--container-lg'?: string;
  '--container-xl'?: string;
  '--container-xxl'?: string;
  '--container-max-width'?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  size?: ContainerSize;
  className?: string;
  height?: string;
  padding?: string;
  isDemo?: boolean;
  maxWidth?: string;
}

export const Container = ({
  children,
  variant = 'default',
  size,
  className = '',
  height = 'auto',
  padding = '16px 16px',
  isDemo = false,
  maxWidth = '1440px',
}: ContainerProps) => {
  if (!children) {
    return null;
  }

  const containerClass = ['container', variant === 'fluid' && 'container-fluid', isDemo && 'is-demo', className]
    .filter(Boolean)
    .join(' ');

  const containerStyle = useMemo(() => {
    // size가 있을 때의 반응형 값 설정
    const sizeValues = size
      ? {
          '--container-sm': containerSizes[size],
          '--container-md': containerSizes[size],
          '--container-lg': containerSizes[size],
          '--container-xl': containerSizes[size],
          '--container-xxl': containerSizes[size],
        }
      : {};

    return {
      height,
      padding,
      width: '100%',
      margin: '0 auto',
      '--container-max-width': variant === 'default' ? maxWidth : '100%',
      ...sizeValues,
    } as ContainerCSSProperties;
  }, [height, padding, size, variant, maxWidth]);

  return (
    <div
      className={containerClass}
      style={containerStyle}
      role="region"
      aria-label="Content container"
      data-testid="container"
    >
      {children}
    </div>
  );
};
