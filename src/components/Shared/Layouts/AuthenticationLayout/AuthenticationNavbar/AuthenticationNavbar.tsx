import { Box, Button, Typography } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";

interface IProps {
  text: string;
  link: string;
  buttonText: string;
}

const AuthenticationNavbar = ({ text, link, buttonText }: IProps) => {
  return (
    <Box
      data-aos="fade-down"
      data-aos-delay="300"
      className="px-8 py-12 lg:px-24 hidden lg:flex justify-between"
    >
      <Logo color="primary" />
      <div className="gap-4 flex items-center">
        <Typography variant="body1" className="font-normal text-gray-400">
          {text}
        </Typography>
        <Link href={`/${link}`} passHref>
          <Button variant="outlined" size="large">
            {buttonText}
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default AuthenticationNavbar;
