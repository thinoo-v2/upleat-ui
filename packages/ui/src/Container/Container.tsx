'use client';

import './Container.scss';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ContainerVariant = 'default' | 'fluid';

const containerSizes: Record<ContainerSize, string> = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
} as const;

export interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  size?: ContainerSize;
  className?: string;
  customHeight?: string;
  padding?: string;
  isDemo?: boolean;
}

export const Container = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  customHeight = 'auto',
  padding = '16px',
  isDemo = false,
}: ContainerProps) => {
  const containerClass = ['container', variant === 'fluid' && 'container-fluid', isDemo && 'is-demo', className]
    .filter(Boolean)
    .join(' ');

  const containerStyle = {
    height: customHeight,
    padding,
    ...(variant === 'default' && { maxWidth: containerSizes[size] }),
  };

  return (
    <div className={containerClass} style={containerStyle} role="region" aria-label="Content container">
      {children}
    </div>
  );
};
