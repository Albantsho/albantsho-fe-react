import alert from "@assets/images/alert.png";
import {
  Avatar,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import useNotificationComponent from "./useNotificationComponent";

const NotificationComponent = () => {
  const {
    anchorEl,
    handleClick,
    handleClose,
    open,
    loading,
    notificationsList,
  } = useNotificationComponent();
  return (
    <>
      <IconButton
        onClick={handleClick}
        className="ml-auto self-center max-h-[31px]  mt-1"
      >
        <Badge badgeContent={notificationsList.length} color="error">
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
      <Popover
        elevation={4}
        className="shadow-secondary"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List className="gap-2 min-w-[200px] w-full justify-center items-center">
          {loading ? (
            <ClipLoader color="grey" className="" />
          ) : (
            Array.from(new Array(6)).map((_, index) => (
              <ListItem className="gap-2 flex-wrap" divider key={index}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="h6"
                      variant="body1"
                      className="futura text-primary-700 font-semibold"
                    >
                      Ali Connors
                    </Typography>
                  }
                  secondary="Brunch this weekend? jhuftdrea dsaffsdfsfd"
                  secondaryTypographyProps={{ className: "w-[170px] futura" }}
                />
                <IconButton className="text-success-500 hover:bg-success-50 bg-success-50">
                  <MdOutlineDone />
                </IconButton>
                <IconButton className="text-error-500 hover:bg-error-50 bg-error-50">
                  <AiOutlineClose />
                </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </>
  );
};

export default NotificationComponent;
