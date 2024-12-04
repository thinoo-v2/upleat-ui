interface IconChevronDownProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconChevronDown = ({ size = 16, style, ...others }: IconChevronDownProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <path d="M17 9.5L12 14.5L7 9.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
