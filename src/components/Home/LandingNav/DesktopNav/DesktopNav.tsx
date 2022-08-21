import { Button, IconButton, InputAdornment } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import UserIcon from "../assets/user.svg";

interface IProps {
  links: { title: string; href: string }[];
}

const DesktopNav = ({ links }: IProps) => {
  return (
    <>
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
              <AiOutlineSearch />
            </InputAdornment>
          ),
        }}
      />
      <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
        {links.map(({ title, href }, i) => (
          <Link href={href} passHref key={i}>
            <Button color="inherit" size="large">
              {title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex gap-10 text-white">
        <IconButton color="inherit">
          <UserIcon width="32" height="32" />
        </IconButton>
        <Button className="rounded-lg" color="inherit" variant="outlined">
          Sign In
        </Button>
      </div>
    </>
  );
};

export default DesktopNav;
