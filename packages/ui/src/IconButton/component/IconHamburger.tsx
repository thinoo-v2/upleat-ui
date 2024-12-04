interface IconHamburgerProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconHamburger = ({ size = 16, style, ...others }: IconHamburgerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <path
      d="M3.30078 5.5H20.7008M3.30078 12H20.7008M3.30078 18.5H20.7008"
      stroke="#111111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
