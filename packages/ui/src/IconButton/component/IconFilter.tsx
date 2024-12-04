interface IconFilterProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconFilter = ({ size = 16, style, ...others }: IconFilterProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.23438 2.82348C6.23438 2.36869 6.60306 2 7.05786 2C7.51265 2 7.88134 2.36869 7.88134 2.82348V21.1765C7.88134 21.6313 7.51265 22 7.05786 22C6.60306 22 6.23438 21.6313 6.23438 21.1765V2.82348ZM16.1162 2.82348C16.1162 2.36869 16.4848 2 16.9396 2C17.3944 2 17.7631 2.36869 17.7631 2.82348V21.1765C17.7631 21.6313 17.3944 22 16.9396 22C16.4848 22 16.1162 21.6313 16.1162 21.1765V2.82348Z"
      fill="#111111"
    />
    <path
      d="M17 16.8818C18.3807 16.8818 19.5 15.7625 19.5 14.3818C19.5 13.0011 18.3807 11.8818 17 11.8818C15.6193 11.8818 14.5 13.0011 14.5 14.3818C14.5 15.7625 15.6193 16.8818 17 16.8818Z"
      fill="white"
      stroke="#303030"
      strokeWidth="1.85283"
    />
    <path
      d="M7 12.5586C8.38071 12.5586 9.5 11.4393 9.5 10.0586C9.5 8.67788 8.38071 7.55859 7 7.55859C5.61929 7.55859 4.5 8.67788 4.5 10.0586C4.5 11.4393 5.61929 12.5586 7 12.5586Z"
      fill="white"
      stroke="#303030"
      strokeWidth="1.85283"
    />
  </svg>
);
