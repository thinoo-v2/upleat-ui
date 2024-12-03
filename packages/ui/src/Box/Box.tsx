import React from 'react';
import styles from './Box.module.css';

export interface BoxProps {
  children?: React.ReactNode;
  padding?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  borderRadius?: string | number;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  children,
  padding,
  margin,
  width,
  height,
  backgroundColor,
  borderRadius,
  className,
  ...props
}) => {
  const style = {
    padding,
    margin,
    width,
    height,
    backgroundColor,
    borderRadius,
  };

  return (
    <div className={`${styles.box} ${className || ''}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Box; 