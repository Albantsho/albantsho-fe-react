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
import EmptyNotification from "./assets/empty-notification.svg";
import useNotificationComponent from "./useNotificationComponent";

const NotificationComponent = () => {
  const {
    anchorEl,
    handleClick,
    handleClose,
    open,
    readNotification,
    deleteNotificationFunc,
    isLoadingInvites,
    isLoadingNotifications,
    invitesData,
    notificationsData,
    loadingDeleteNotification,
    loadingSeenNotification,
    acceptInviteFunc,
    loadingAcceptInvite,
    loadingRejectInvite,
    rejectInviteFunc,
    collaboratorsData,
    user,
  } = useNotificationComponent();
  const xlScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <IconButton
        onClick={handleClick}
        className="ml-auto self-center max-h-[31px]  mt-1"
      >
        <Badge
          badgeContent={
            Number(
              Number(
                notificationsData?.notifications.filter((n) => !n.read).length
              ) +
                Number(
                  invitesData?.invites.filter((i) => !i.rejected && !i.accepted)
                    .length
                )
            ) || null
          }
          color="error"
        >
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
      <Popover
        elevation={4}
        className="shadow-secondary flex flex-col justify-between"
        sx={{ "& .MuiPaper-root": { maxHeight: "600px" } }}
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
          {notificationsData &&
          !isLoadingNotifications &&
          invitesData &&
          !isLoadingInvites ? (
            notificationsData.notifications.length +
              invitesData.invites.filter((i) => !i.rejected).length >
            0 ? (
              <>
                {notificationsData.notifications.map((notification) => (
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
                          disabled={loadingSeenNotification}
                        >
                          Mark as read
                        </Button>
                      )}

                      <Button
                        onClick={deleteNotificationFunc(notification._id)}
                        variant="outlined"
                        color="error"
                        disabled={loadingDeleteNotification}
                      >
                        Delete
                      </Button>
                    </div>
                  </ListItem>
                ))}
                {invitesData.invites
                  .filter((i) => !i.rejected)
                  .filter((i) => !i.accepted)
                  .map((invite) => (
                    <ListItem
                      className="gap-1 items-start flex-col relative"
                      divider
                      key={invite._id}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            component="h6"
                            variant="body1"
                            className="futura text-primary-700 font-semibold"
                          >
                            Collaboration Invite
                          </Typography>
                        }
                        secondary={`Hello, you've been invited by ${invite.inviter.firstName} ${invite.inviter.lastName} to collaborate on ${invite.script.title}.`}
                        secondaryTypographyProps={{
                          className: "futura max-w-[250px]",
                        }}
                      />
                      <div className="flex gap-1 justify-between">
                        {!invite.accepted ? (
                          <Button
                            onClick={acceptInviteFunc(invite._id)}
                            variant="outlined"
                            color="success"
                            disabled={loadingAcceptInvite}
                          >
                            Accept invite
                          </Button>
                        ) : (
                          <Link
                            passHref
                            legacyBehavior
                            href={routes.script.dynamicUrl(invite.script._id)}
                          >
                            <Button variant="outlined" color="success">
                              go to script Page
                            </Button>
                          </Link>
                        )}

                        {!invite.rejected && !invite.accepted && (
                          <Button
                            onClick={rejectInviteFunc(invite._id)}
                            variant="outlined"
                            color="error"
                            disabled={loadingRejectInvite}
                          >
                            Reject invite
                          </Button>
                        )}
                      </div>
                    </ListItem>
                  ))}

                {collaboratorsData?.scripts.map((script) => (
                  <ListItem
                    className="gap-1 items-start flex-col relative"
                    divider
                    key={script._id}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          component="h6"
                          variant="body1"
                          className="futura text-primary-700 font-semibold"
                        >
                          Collaboration Invite
                        </Typography>
                      }
                      secondary={`Hello, you've been invited by ${script.author.firstName} ${script.author.lastName} to collaborate on ${script.title}.`}
                      secondaryTypographyProps={{
                        className: "futura max-w-[250px]",
                      }}
                    />
                    <div className="flex gap-1 justify-between">
                      <Link
                        passHref
                        legacyBehavior
                        href={routes.script.dynamicUrl(script._id)}
                      >
                        <Button variant="outlined" color="success">
                          go to script Page
                        </Button>
                      </Link>
                    </div>
                  </ListItem>
                ))}
              </>
            ) : (
              <div className="flex min-h-full items-center justify-center py-6 pt-24 px-10">
                <EmptyNotification />
              </div>
            )
          ) : (
            <ClipLoader color="grey" className="mt-[180px] inline-block" />
          )}
        </List>
        {user.userType === "writer" &&
        !isLoadingInvites &&
        invitesData &&
        collaboratorsData
          ? invitesData.invites
              .filter((i) => !i.rejected)
              .filter((i) => !i.accepted).length +
              collaboratorsData.scripts.length >
              0 && (
              <Link passHref legacyBehavior href={routes.invites.url}>
                <Button variant="text" className="text-center w-full py-4">
                  See your Invites :
                  {invitesData.invites
                    .filter((i) => !i.rejected)
                    .filter((i) => !i.accepted).length +
                    collaboratorsData.scripts.length}
                </Button>
              </Link>
            )
          : ""}
      </Popover>
    </>
  );
};

export default NotificationComponent;
