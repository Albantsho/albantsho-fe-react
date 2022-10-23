import { Button } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useUserStore from "app/user.store";
import Link from "next/link";
import routes from "routes/routes";

interface IProps {
  links: { title: string; href: string }[];
  isTransparent: boolean;
}

const DesktopNav = ({ links, isTransparent }: IProps) => {
  const { user } = useUserStore();

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
      {user.active ? (
        <ProfileMenu />
      ) : (
        <Link href={`${routes.signin}`} passHref>
          <Btn size="large" className="py-4 px-7">
            Sign In
          </Btn>
        </Link>
      )}
    </div>
  );
};

export default DesktopNav;
