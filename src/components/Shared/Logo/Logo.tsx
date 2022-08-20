import LogoSvg from "@assets/logo.svg";
import { Box, useTheme } from "@mui/material";
import Link from "next/link";

interface IProps {
  color?: "primary";
}

const Logo = ({ color }: IProps) => {
  const { palette } = useTheme();

  return (
    <Link href="/" passHref>
      <Box
        component="a"
        sx={{
          "svg > path": {
            fill: color === "primary" ? palette.primary.main : "#fff",
          },
        }}
      >
        <LogoSvg width="120" height="30" />
      </Box>
    </Link>
  );
};

export default Logo;
