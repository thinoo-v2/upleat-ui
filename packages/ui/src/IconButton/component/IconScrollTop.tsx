interface IconScrollTopProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconScrollTop = ({ size = 24, style, ...others }: IconScrollTopProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <path
      d="M18.0699 9.57L11.9999 3.5L5.92993 9.57"
      stroke="#111111"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.4999V3.66992"
      stroke="#111111"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
