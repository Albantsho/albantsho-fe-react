import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  openProfileMenu: HTMLElement | null;
  setOpenProfileMenu: Dispatch<SetStateAction<HTMLElement | null>>;
}

const ProfileMenu = ({ openProfileMenu, setOpenProfileMenu }: IProps) => {
  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  const openProfile = Boolean(openProfileMenu);
  const { push } = useRouter();

  return (
    <Menu
      anchorEl={openProfileMenu}
      open={openProfile}
      onClose={handleCloseProfileMenu}
      onClick={handleCloseProfileMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
          borderRadius: "8px",
          maxWidth: "300px",
          width: "100%",
          py: 2,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem divider className="px-6 py-2" onClick={() => push("/profile")}>
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
     
      <MenuItem divider className="px-6 py-3" onClick={() => push("/projects")}>
        <ListItemText
          primaryTypographyProps={{
            className: "text-primary-700 ",
          }}
        >
          Go to dashboard
        </ListItemText>
      </MenuItem>
      <MenuItem className="px-6 py-3">
        <ListItemText
          primaryTypographyProps={{
            className: "text-primary-700",
          }}
        >
          Contact Us
        </ListItemText>
      </MenuItem>
      <MenuItem divider className="px-6 py-3">
        <ListItemText
          primaryTypographyProps={{
            className: "text-primary-700",
          }}
        >
          Help
        </ListItemText>
      </MenuItem>
      <MenuItem className="px-6 py-3">
        <ListItemText
          primaryTypographyProps={{
            className: "text-error-700",
          }}
        >
          Sign Out
        </ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
