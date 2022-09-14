import LogoSvg from "@assets/logo.svg";
import { SvgIcon, type SvgIconProps } from "@mui/material";
import Link from "next/link";
import routes from "routes/routes";

const Logo = ({ sx, ...props }: SvgIconProps) => {
  return (
    <Link href={`${routes.home}`} passHref>
      <a>
        <SvgIcon
          inheritViewBox
          component={LogoSvg}
          sx={{ width: 120, height: 30, ...sx }}
          {...props}
        />
      </a>
    </Link>
  );
};

export default Logo;
