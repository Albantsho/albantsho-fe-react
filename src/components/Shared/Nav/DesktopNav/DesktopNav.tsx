import { Button, Typography } from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import useUserStore from "store/user.store";
import routes from "utils/routes";

interface IProps {
  links: { title: string; href: string }[];
  secondaryUnderLineColor?: boolean;
}

const DesktopNav = ({ links, secondaryUnderLineColor }: IProps) => {
  const { route } = useRouter();
  const user = useUserStore((state) => state.user);

  return (
    <>
      <div className="flex min-[1080px]:gap-20 gap-16 mx-10 flex-1 justify-center relative">
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
                route === href &&
                `${
                  !secondaryUnderLineColor
                    ? "bg-primary-700 "
                    : "bg-secondary-700"
                }`
              } absolute -bottom-[22.7px] w-full h-1`}
            ></div>
          </Link>
        ))}
      </div>
      {user.emailVerified ? (
        <ProfileMenu inHome />
      ) : (
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
