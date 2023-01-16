import alert from "@assets/images/alert.png";
import {
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import routes from "routes/routes";
import useNotificationComponent from "./useNotificationComponent";

const NotificationComponent = () => {
  const {
    anchorEl,
    handleClick,
    handleClose,
    open,
    loading,
    notificationsList,
    readNotification,
    deleteNotificationFunc,
    allInvites,
  } = useNotificationComponent();
  const xlScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <IconButton
        onClick={handleClick}
        className="ml-auto self-center max-h-[31px]  mt-1"
      >
        <Badge
          badgeContent={notificationsList.filter((n) => !n.read).length}
          color="error"
        >
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
      <Popover
        elevation={4}
        className="shadow-secondary flex flex-col justify-between max-h-[600px]"
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
                className="gap-1 items-start flex-col relative"
                divider
                key={notification._id}
              >
                {!notification.read && (
                  <span className="w-1 h-1 rounded-full absolute left-1 top-1/2 bottom-1/2 bg-primary-700"></span>
                )}
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
                    className: "futura max-w-[250px]",
                  }}
                />
                <div className="flex gap-1 justify-between">
                  {!notification.read && (
                    <Button
                      onClick={readNotification(notification._id)}
                      variant="outlined"
                      color="info"
                    >
                      Mark as read
                    </Button>
                  )}

                  <Button
                    onClick={deleteNotificationFunc(notification._id)}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>
              </ListItem>
            ))
          )}
        </List>
        {allInvites.filter((n) => !n.rejected).length > 0 && (
          <Link passHref legacyBehavior href={routes.invites.url}>
            <Button variant="text" className="text-center w-full py-4">
              See your Invites : {allInvites.filter((n) => !n.rejected).length}
            </Button>
          </Link>
        )}
      </Popover>
    </>
  );
};

export default NotificationComponent;
