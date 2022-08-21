import LogoSvg from "@assets/logo.svg";
import { SvgIcon, type SvgIconProps } from "@mui/material";
import Link from "next/link";

const Logo = ({ sx, ...props }: SvgIconProps) => {
  return (
    <Link href="/" passHref>
      <a>
        <SvgIcon
          component={LogoSvg}
          inheritViewBox
          sx={{ width: 120, height: 30, ...sx }}
          {...props}
        />
      </a>
    </Link>
  );
};

export default Logo;
