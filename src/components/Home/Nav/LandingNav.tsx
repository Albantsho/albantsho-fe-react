import { AppBar, Button, Icon, InputAdornment, Toolbar } from "@mui/material";
import Input from "@shared/Input/Input";
import Search from "assets/icons/search.svg";
import UserIcon from "assets/icons/user.svg";
import Logo from "assets/logo.svg";
import Link from "next/link";

const LandingNav = () => {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar className="py-10">
        <Link href="/">
          <Logo className="max-w-[120px] cursor-pointer mr-12" />
        </Link>
        <Input
          className="max-w-[335px] w-full "
          placeholder="Search stories, themes, budget, budget"
          variant="outlined"
          InputProps={{
            classes: { root: "!text-white !text-[12px] py-3" },
            startAdornment: (
              <InputAdornment position="start">
                <Icon sx={{ path: { fill: "#fff" } }}>
                  <Search />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
        <div className="flex gap-12">
          <Link href="#" passHref>
            <Button
              color="inherit"
              className="text-white normal-case text-[16px] font-normal"
            >
              Story Base
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button
              color="inherit"
              className="text-white normal-case text-[16px] font-normal"
            >
              Write
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button
              color="inherit"
              className="text-white normal-case text-[16px] font-normal"
            >
              List
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button
              color="inherit"
              className="text-white normal-case text-[16px] font-normal"
            >
              Blog
            </Button>
          </Link>
        </div>
        <div className="flex gap-10">
          <UserIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default LandingNav;
