import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useInvite, { type ICreateNewInvitePayload } from "apis/Invite.api";
import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation, useQuery } from "react-query";
import { Socket } from "socket.io-client";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";

interface IAddCollaboratorFormValues {
  email: string;
}

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const queryClient = new QueryClient();

const useScriptDocument = ({ socket }: IProps) => {
  const [activeButton, setActiveButton] = useState(0);
  const { createNewInvite } = useInvite();
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const {
    data: collaboratorsData,
    isLoading: loadingGetCollaboratorList,
    refetch,
  } = useQuery(
    ["collaborator", scriptID],
    () => listAllCollaborators(scriptID),
    {
      enabled: scriptID.length > 0,
    }
  );

  const { mutate: createInviteMutate, isLoading: loadingCreateInvite } =
    useMutation<IResData<object>, Error, ICreateNewInvitePayload>(
      (data) => createNewInvite(data),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          reset({ email: "" });
          successHandler(data.message);
          queryClient.invalidateQueries(["notification", "invite"]);
          refetch();
        },
      }
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddCollaboratorFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(addCollaboratorSchema),
  });

  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);

  const removeCollaborator = (collaboratorId: string) => () => {
    socket.emit("removeCollaborator", collaboratorId);
    if (collaboratorsData) {
      queryClient.invalidateQueries("collaborator");
    }
  };

  useEffect(() => {
    socket.on("collaboratorLeaves", (_collaboratorId) => {
      ("");
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: IAddCollaboratorFormValues) =>
    createInviteMutate({ email: data.email, scriptId: query.id as string });

  return {
    loading: loadingCreateInvite,
    onSubmit,
    register,
    handleSubmit,
    errors,
    openInfoCollaborator,
    openListCollaborator,
    activeButton,
    collaboratorsList: collaboratorsData,
    loadingGetCollaboratorList,
    removeCollaborator,
  };
};

export default useScriptDocument;
