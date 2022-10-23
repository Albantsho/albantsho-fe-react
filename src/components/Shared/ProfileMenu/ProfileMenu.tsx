import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { AiFillCaretDown } from "react-icons/ai";
import routes from "routes/routes";
import useProfileMenu from "./useProfileMenu";

interface IProps {
  isMobile?: boolean;
}

const ProfileMenu = ({ isMobile }: IProps) => {
  const {
    handleCloseProfileMenu,
    handleOpenMenu,
    openProfile,
    openProfileMenu,
    signOutUser,
  } = useProfileMenu();
  const { push } = useRouter();

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
          className="text-primary-700 futura font-medium mr-3"
        >
          Jane Mawe
        </Typography>
        <Avatar src="/assets/images/profile.jpg" />
        <AiFillCaretDown
          className={`${isMobile ? "hidden " : "block text-primary-700"}`}
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
          onClick={() => push(routes.profile)}
        >
          <ListItemAvatar>
            <Avatar src="/assets/images/profile.jpg" />
          </ListItemAvatar>
          <ListItemText>
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium leading-normal -mb-2"
            >
              Jane Mawe
            </Typography>
            <Typography variant="caption" className="text-neutral-800 ">
              John Doe@gmail.com
            </Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem
          TouchRippleProps={{ className: "text-primary-main" }}
          divider
          className="px-6 py-4 hover:bg-primary-50/25"
          onClick={() => push(routes.projectsDashboard)}
        >
          <ListItemText
            primaryTypographyProps={{
              className: "text-primary-700 ",
            }}
          >
            Go to dashboard
          </ListItemText>
        </MenuItem>
        <MenuItem
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
        <MenuItem
          onClick={signOutUser}
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
