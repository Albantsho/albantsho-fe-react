import { Box, Button } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";

interface IProps {
  text: string;
  link: string;
  buttonText: string;
}

const NavbarAuthentication = ({ text, link, buttonText }: IProps) => {
  return (
    <Box className="px-8 py-12 lg:px-24 hidden lg:flex justify-between">
      <Logo color="primary" />
      <div className="space-x-4">
        <span className="font-normal">{text}</span>
        <Link href={`/${link}`}   passHref>
          <Button variant="outlined" size="large">
            {buttonText}
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default NavbarAuthentication;
