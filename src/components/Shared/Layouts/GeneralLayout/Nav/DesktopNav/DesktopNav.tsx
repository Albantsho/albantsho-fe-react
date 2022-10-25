import { Button } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import { useUserStore } from "app/user.store";
import Link from "next/link";
import { useEffect } from "react";
import routes from "routes/routes";
import shallow from "zustand/shallow";
import useDesktopNav from "./useDesktopNav";

interface IProps {
  links: { title: string; href: string }[];
  isTransparent: boolean;
}

const DesktopNav = ({ links, isTransparent }: IProps) => {
  const { user } = useDesktopNav();

  return (
    <div className="lg:flex items-center w-full hidden">
      <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
        {links.map(({ title, href }, i) => (
          <Link href={href} passHref key={i}>
            <Button
              color={isTransparent ? "inherit" : "primary"}
              size="large"
              className="futura font-medium text-xl"
            >
              {title}
            </Button>
          </Link>
        ))}
      </div>

      {typeof window === "undefined" ? (
        ""
      ) : user.active ? (
        <ProfileMenu />
      ) : (
        <Link href={`${routes.signin}`} passHref>
          <Btn size="large" className="py-4 px-7">
            Sign In
          </Btn>
        </Link>
      )}
      {/* {typeof window !== "undefined" && !user.active && (
        <Link href={`${routes.signin}`} passHref>
          <Btn size="large" className="py-4 px-7">
            Sign In
          </Btn>
        </Link>
      )} */}
    </div>
  );
};

export default DesktopNav;
