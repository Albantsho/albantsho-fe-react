import { Button, IconButton, InputAdornment, SvgIcon } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import useUserStore from "app/user.store";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "routes/routes";
import UserIcon from "../assets/user.svg";

interface IProps {
  links: { title: string; href: string }[];
}

const DesktopNav = ({ links }: IProps) => {
  const user = useUserStore((state) => state.user);

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
            <InputAdornment position="start" sx={{ fontSize: 14.5 }}>
              <AiOutlineSearch className="text-white" />
            </InputAdornment>
          ),
        }}
      />
      <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
        {links.map(({ title, href }, i) => (
          <Link href={href} passHref legacyBehavior key={i}>
            <Button color="inherit" size="large">
              {title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex gap-10 text-white">
        <IconButton color="inherit">
          <SvgIcon component={UserIcon} inheritViewBox sx={{ fontSize: 32 }} />
        </IconButton>
        {!user.email_verified && (
          <Link href={routes.signin.url} legacyBehavior passHref>
            <Button className="rounded-lg" color="inherit" variant="outlined">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default DesktopNav;
