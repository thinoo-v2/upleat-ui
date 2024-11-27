'use client';
import { useState, useEffect } from 'react';
import './Container.scss';
type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const containerSizes = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
  size?: ContainerSize;
  className?: string;
  customHeight?: string;
  padding?: string;
}

export const Container = ({
  children,
  fluid = false,
  size,
  className = '',
  customHeight = 'auto',
  padding = '16px 16px',
}: ContainerProps) => {
  const containerClass = `${fluid ? 'container container-fluid' : 'container'} ${className}`.trim();

  const containerStyle = {
    padding: padding,
    customHeight: customHeight,
    width: fluid ? '100%' : undefined,
    ...(size && !fluid && { maxWidth: containerSizes[size] }),
  };

  return (
    <div className={containerClass} style={containerStyle}>
      {children}
    </div>
  );
};
