import { Button } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";

interface IProps {
  links: { title: string; href: string }[];
}

const DesktopNav = ({ links }: IProps) => {
  return (
    <>
      <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
        {links.map(({ title, href }, i) => (
          <Link href={href} passHref key={i}>
            <Button color="inherit" size="large">
              {title}
            </Button>
          </Link>
        ))}
      </div>
      <Link href="/login" passHref>
        <Btn size="large">Sign In</Btn>
      </Link>
    </>
  );
};

export default DesktopNav;
