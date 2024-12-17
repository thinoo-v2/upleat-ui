interface IconSelectDownProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconSelectDown = ({ size = 16, style, ...others }: IconSelectDownProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <path
      d="M8.36858 10.5979C8.17041 10.8141 7.82959 10.8141 7.63142 10.5979L3.26804 5.83786C2.97407 5.51716 3.20157 5 3.63662 5H12.3634C12.7984 5 13.0259 5.51716 12.732 5.83786L8.36858 10.5979Z"
      fill="#202020"
    />
  </svg>
);
