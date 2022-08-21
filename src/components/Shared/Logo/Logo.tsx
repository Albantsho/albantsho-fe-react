import LogoSvg from "@assets/logo.svg";
import { Box, type BoxProps } from "@mui/material";
import Link from "next/link";

const Logo = (props: BoxProps) => {
  return (
    <Link href="/" passHref>
      <Box component="a" {...props}>
        <LogoSvg width="120" height="30" />
      </Box>
    </Link>
  );
};

export default Logo;
