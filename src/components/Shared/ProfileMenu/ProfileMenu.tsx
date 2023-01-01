import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { AiFillCaretDown } from "react-icons/ai";
import routes from "routes/routes";

import useProfileMenu from "./useProfileMenu";

interface IProps {
  isMobile?: boolean;
  inHome?: boolean;
}

const ProfileMenu = ({ inHome, isMobile }: IProps) => {
  const {
    handleCloseProfileMenu,
    handleOpenMenu,
    openProfile,
    openProfileMenu,
    logOutUserFunc,
  } = useProfileMenu();
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);

  return (
    <>
      <div
        onClick={handleOpenMenu}
        className={`${
          isMobile && "justify-center flex-col-reverse"
        } flex gap-2 items-center cursor-pointer`}
      >
        <Typography
          variant="h6"
          component="p"
          className={`${
            inHome
              ? "text-white text-base font-normal"
              : "text-primary-700 futura font-medium"
          } mr-3`}
        >
          {user.firstName + " " + user.lastName}
        </Typography>
        <Avatar
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user.image}`}
          alt={user.firstName}
        />
        <AiFillCaretDown
          className={`${inHome && "text-white"} ${
            isMobile ? "hidden" : "block text-primary-700"
          }`}
        />
      </div>
      <Menu
        anchorEl={openProfileMenu}
        open={openProfile}
        onClose={handleCloseProfileMenu}
        onClick={handleCloseProfileMenu}
        MenuListProps={{ className: "py-0" }}
        PaperProps={{
          elevation: 0,
          sx: {
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
            borderRadius: "8px",
            maxWidth: `${isMobile ? "260px" : "300px"}`,
            width: "100%",
          },
        }}
        transformOrigin={{
          horizontal: `${isMobile ? "center" : "right"}`,
          vertical: "top",
        }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          TouchRippleProps={{ className: "text-primary-main" }}
          divider
          color="primary"
          className="px-6 py-4 hover:bg-primary-50/25"
          onClick={() => push(routes.profile.url)}
        >
          <ListItemAvatar>
            <Avatar
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user.image}`}
              alt={user.firstName}
            />
          </ListItemAvatar>
          <ListItemText>
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium leading-normal -mb-2"
            >
              {user.firstName + " " + user.lastName}
            </Typography>
            <Typography
              variant="caption"
              className="text-neutral-800 text-ellipsis overflow-clip"
            >
              {user.email}
            </Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem
          TouchRippleProps={{ className: "text-primary-main" }}
          divider
          className="px-6 py-4 hover:bg-primary-50/25"
          onClick={() => {
            user.userType === "writer"
              ? push(routes.writerDashboard.url)
              : user.userType === "producer"
              ? push(routes.producerDashboard.url)
              : user.userType === "admin"
              ? push(routes.adminDashboard.url)
              : push(routes.reviewerDashboard.url);
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              className: "text-primary-700 ",
            }}
          >
            Go to dashboard
          </ListItemText>
        </MenuItem>
        {user.userType !== "admin" && (
          <MenuItem
            onClick={() => push(routes.aboutUs.url)}
            TouchRippleProps={{ className: "text-primary-main" }}
            className="px-6 py-4 hover:bg-primary-50/25"
          >
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700",
              }}
            >
              Contact Us
            </ListItemText>
          </MenuItem>
        )}
        {user.userType !== "admin" && (
          <MenuItem
            divider
            TouchRippleProps={{ className: "text-primary-main" }}
            className="px-6 py-4 hover:bg-primary-50/25"
          >
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700",
              }}
            >
              Help
            </ListItemText>
          </MenuItem>
        )}

        <MenuItem
          onClick={logOutUserFunc}
          TouchRippleProps={{ className: "text-error-700" }}
          className="px-6 py-4 hover:bg-error-50"
        >
          <ListItemText
            primaryTypographyProps={{
              className: "text-error-700",
            }}
          >
            Sign Out
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
