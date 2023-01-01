import alert from "@assets/images/alert.png";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
  useMediaQuery,
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
    acceptInviteFunc,
    rejectInviteFunc,
  } = useNotificationComponent();
  const xlScreen = useMediaQuery("(min-width: 1024px)");
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
        className="shadow-secondary flex flex-col justify-between"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: xlScreen ? "center" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: xlScreen ? "center" : "right",
        }}
      >
        <List className="gap-2 min-w-[250px] min-h-[400px] w-full max-w-md text-center">
          {loading ? (
            <ClipLoader color="grey" className="mt-[180px] inline-block" />
          ) : (
            notificationsList.map((notification) => (
              <ListItem
                className="gap-1 items-start"
                divider
                key={notification.userId}
              >
                <ListItemAvatar className="pt-3">
                  <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="h6"
                      variant="body1"
                      className="futura text-primary-700 font-semibold"
                    >
                      {notification.title}
                    </Typography>
                  }
                  secondary={notification.description}
                  secondaryTypographyProps={{
                    className: "max-w-[250px] futura",
                  }}
                />
                {/* <IconButton
                  onClick={acceptInviteFunc(notification.description)}
                  className="text-success-500 hover:bg-success-50 bg-success-50"
                >
                  <MdOutlineDone />
                </IconButton>
                <IconButton
                  onClick={rejectInviteFunc(notification.description)}
                  className="text-error-500 hover:bg-error-50 bg-error-50"
                >
                  <AiOutlineClose />
                </IconButton> */}
              </ListItem>
            ))
          )}
        </List>

        <Button variant="text" className="text-center w-full py-4">
          See list all Invites
        </Button>
      </Popover>
    </>
  );
};

export default NotificationComponent;
