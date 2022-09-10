import { Avatar, Badge, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import wallet from "./assets/wallet.png";
import { IoIosMore } from "react-icons/io";
import alert from "./assets/alert.png";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

import WalletMenu from "./WalletMenu/WalletMenu";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const DashboardNavOnDesktop = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState<null | HTMLElement>(
    null
  );

  const [openWalletMenu, setOpenWalletMenu] = useState<null | HTMLElement>(
    null
  );

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfileMenu(event.currentTarget);
  };

  const handleOpenWalletMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenWalletMenu(event.currentTarget);
  };

  return (
    <>
      <div className="flex px-1 flex-1 justify-between items-center">
        <Button
          sx={{ border: "1px solid #ccc" }}
          onClick={handleOpenWalletMenu}
          className="border border-gray-300 py-2 px-3 rounded-md flex justify-center gap-4 items-center cursor-pointer"
        >
          <div className="mt-1">
            <Image src={wallet} alt="wallet" />
          </div>
          <Typography
            component="p"
            variant="h6"
            className="text-primary-700 futura font-medium"
          >
            Balance:$20,000
          </Typography>
          <div className="my-auto mt-2">
            <IoIosMore className="text-2xl text-primary-700" />
          </div>
        </Button>
        <WalletMenu
          openWalletMenu={openWalletMenu}
          setOpenWalletMenu={setOpenWalletMenu}
        />

        <div className="flex items-center   gap-12">
          <IconButton className="ml-auto self-center max-h-[31px]  mt-1">
            <Badge badgeContent={1} color="error">
              <div>
                <Image src={alert} alt="alert" />
              </div>
            </Badge>
          </IconButton>

          <div
            onClick={handleOpenMenu}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Typography
              variant="h6"
              component="p"
              className="text-primary-700 futura font-medium mr-3"
            >
              Jane Mawe
            </Typography>
            <Avatar src="/assets/images/profile.jpg" />
            <AiFillCaretDown className="text-primary-700" />
          </div>
          <ProfileMenu
            openProfileMenu={openProfileMenu}
            setOpenProfileMenu={setOpenProfileMenu}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardNavOnDesktop;
