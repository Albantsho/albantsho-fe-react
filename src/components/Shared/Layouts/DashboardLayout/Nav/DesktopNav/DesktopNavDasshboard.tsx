import { Badge, Typography } from "@mui/material";
import Image from "next/image";
import wallet from "./assets/wallet.png";
import { IoIosMore } from "react-icons/io";
import alert from "./assets/alert.png";
import avatar from "./assets/avatar.png";
import { AiFillCaretDown } from "react-icons/ai";

const DesktopNavDashboard = () => {
  return (
    <>
      <div className="flex px-10 flex-1 justify-between items-center">
        <div className="border border-gray-300 py-2 px-3 rounded-md flex justify-center gap-4 items-center">
          <div className="mt-1">
            <Image src={wallet} alt="wallet" />
          </div>
          <Typography
            variant="body1"
            className="text-primary-700 futura font-medium"
          >
            Balance:$20,000
          </Typography>
          <div className="my-auto mt-2">
            <IoIosMore className="text-2xl text-primary-700" />
          </div>
        </div>
        <div className="flex items-center">
          <Badge badgeContent={1} color="error" className="ml-auto mr-12 mt-1">
            <div>
              <Image src={alert} alt="alert" />
            </div>
          </Badge>

          <Typography
            variant="body1"
            className="text-primary-700 futura font-medium mr-3"
          >
            Jane Mawe
          </Typography>
          <div className="flex gap-2 items-center ">
            <div>
              <Image
                className="rounded-full"
                loading="lazy"
                src={avatar}
                alt="user"
              />
            </div>
            <AiFillCaretDown className="text-primary-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavDashboard;
