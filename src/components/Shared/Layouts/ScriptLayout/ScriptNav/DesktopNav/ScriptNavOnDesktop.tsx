import { Avatar, AvatarGroup } from "@mui/material";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useScriptsApi from "apis/Scripts.api";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import useUserStore from "store/user.store";
import AddCollaborator from "../AddCollaborator/AddCollaborator";

const DashboardNavOnDesktop = () => {
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();
  const user = useUserStore((state) => state.user);

  const {
    data: collaboratorsData,
    isLoading: loadingGetCollaboratorList,
    refetch,
  } = useQuery("collaborator", () => listAllCollaborators(query.id as string));

  return (
    <div className="lg:flex px-1 flex-1 justify-end items-center hidden">
      {collaboratorsData && !loadingGetCollaboratorList && (
        <div className="flex items-center gap-12">
          {user.email === collaboratorsData?.script.author.email && (
            <AddCollaborator refetch={refetch} />
          )}

          <AvatarGroup max={3}>
            {collaboratorsData?.script.collaborators.map((collaborator) => (
              <Avatar
                key={collaborator._id}
                alt={collaborator.firstName}
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
