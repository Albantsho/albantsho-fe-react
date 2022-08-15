import {
  AppBar,
  Button,
  Icon,
  IconButton,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Search from "@assets/icons/search.svg";
import UserIcon from "@assets/icons/user.svg";
import Logo from "@assets/logo.svg";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar className="py-10 px-0" component="nav">
        <Link href="/" passHref>
          <a className="cursor-pointer mr-12">
            <Logo className="w-[120px] h-[30px]" />
          </a>
        </Link>
        <CustomInput
          className="max-w-[335px] w-full"
          placeholder="Search stories, themes, budget, budget"
          variant="outlined"
          InputProps={{
            classes: {
              root: "!text-white !text-[12px] py-3",
              notchedOutline: "!border-white",
            },
            startAdornment: (
              <InputAdornment position="start">
                <Icon sx={{ path: { fill: "#fff" } }}>
                  <Search />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
        <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
          <Link href="#" passHref>
            <Button color="inherit" size="large">
              Story Base
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button color="inherit" size="large">
              Write
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button color="inherit" size="large">
              List
            </Button>
          </Link>
          <Link href="#" passHref>
            <Button color="inherit" size="large">
              Blog
            </Button>
          </Link>
        </div>
        <div className="flex gap-10 text-white">
          <IconButton color="inherit">
            <UserIcon className="w-[32px] h-[32px]" />
          </IconButton>
          <Button className="rounded-lg" color="inherit" variant="outlined">
            Sign In
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
