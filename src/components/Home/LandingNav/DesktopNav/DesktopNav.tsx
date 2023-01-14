import { Button, Typography } from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useUserStore from "app/user.store";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "routes/routes";

interface IProps {
  links: { title: string; href: string }[];
}

const DesktopNav = ({ links }: IProps) => {
  const user = useUserStore((state) => state.user);
  const { route } = useRouter();

  return (
    <>
      <div className="flex gap-20 mx-10 flex-1 justify-center relative">
        {links.map(({ title, href }, i) => (
          <Link className="relative" href={href} key={i}>
            <Typography
              className="futura font-medium text-primary-700"
              color="inherit"
              variant="h6"
            >
              {title}
            </Typography>
            <div
              className={`${
                route === href && "bg-primary-700"
              } absolute -bottom-6 w-full h-1`}
            ></div>
          </Link>
        ))}
      </div>
      {user.emailVerified && <ProfileMenu inHome />}
      {!user.emailVerified && (
        <Link legacyBehavior href={routes.signin.url} passHref>
          <Button
            variant="outlined"
            className="px-4 py-3 rounded-lg font-medium"
          >
            Sign In
          </Button>
        </Link>
      )}
    </>
  );
};

export default DesktopNav;
