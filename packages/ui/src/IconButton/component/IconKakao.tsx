interface IconKakaoProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IconKakao = ({ size = 24, style, ...others }: IconKakaoProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, ...style }}
    {...others}
  >
    <circle cx="12" cy="12" r="12" fill="#FEE500" />
    <path
      d="M12.0346 5.79199C8.30113 5.79199 5.29028 8.20064 5.29028 11.1248C5.29028 13.0228 6.5428 14.6848 8.42156 15.6338L7.78567 18.0088C7.77368 18.0444 7.77184 18.0826 7.78035 18.1192C7.78886 18.1558 7.80738 18.1893 7.83385 18.2159C7.87244 18.2499 7.92209 18.2688 7.97355 18.2689C8.01621 18.2655 8.05669 18.2486 8.08917 18.2207L10.8254 16.3757C11.2293 16.4315 11.6365 16.4604 12.0442 16.4624C15.7728 16.4624 18.7885 14.0537 18.7885 11.1248C18.7885 8.19583 15.7632 5.79199 12.0346 5.79199Z"
      fill="#303030"
    />
  </svg>
);
