import alert from "@assets/images/alert.png";
import { Avatar, AvatarGroup, Badge, IconButton } from "@mui/material";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Image from "next/image";

import AddCollaborator from "../AddCollaborator/AddCollaborator";

const DashboardNavOnDesktop = () => {
  return (
    <div className="lg:flex px-1 flex-1 justify-end items-center hidden">
      <div className="flex items-center gap-12">
        <AddCollaborator />
        <AvatarGroup max={3}>
          <Avatar className="bg-success-500">J</Avatar>
          <Avatar className="bg-orange-500">F</Avatar>
          <Avatar className="bg-primary-300">M</Avatar>
        </AvatarGroup>
        <NotificationComponent />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default DashboardNavOnDesktop;
