import { Box, Button } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";

const NavbarAuthenticationSignin = () => {
  return (
    <Box className="hidden lg:flex justify-between">
      <Logo color="primary" />
      <div className="space-x-4">
        <span className="font-normal">Already have an account?</span>
        <Link href="/signin" passHref>
          <Button variant="outlined" size="large">
            SIGN IN
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default NavbarAuthenticationSignin;
