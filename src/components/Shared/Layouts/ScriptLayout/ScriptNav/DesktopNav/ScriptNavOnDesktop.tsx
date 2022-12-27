import { Avatar, AvatarGroup } from "@mui/material";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import { ICollaboratorList } from "interfaces/collaborator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AddCollaborator from "../AddCollaborator/AddCollaborator";

const DashboardNavOnDesktop = () => {
  const [collaboratorsList, setCollaboratorsList] =
    useState<ICollaboratorList>();
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    async function getAllCollaboratorsFunc() {
      if (typeof query.id === "string") {
        const res = await listAllCollaborators(query.id as string);
        setCollaboratorsList(res.data.script);
      }
    }

    getAllCollaboratorsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="lg:flex px-1 flex-1 justify-end items-center hidden">
      {collaboratorsList && (
        <div className="flex items-center gap-12">
          {user.email === collaboratorsList.author.email && <AddCollaborator />}

          <AvatarGroup max={3}>
            {collaboratorsList.collaborators.map((collaborator) => (
              <Avatar
                key={collaborator._id}
                alt={collaborator.fullname}
                src={collaborator.image}
              />
            ))}
          </AvatarGroup>
          <NotificationComponent />
          <ProfileMenu />
        </div>
      )}
    </div>
  );
};

export default DashboardNavOnDesktop;
