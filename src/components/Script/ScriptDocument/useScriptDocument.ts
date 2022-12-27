import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useInvite from "apis/Invite.api";
import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import { ICollaboratorList } from "interfaces/collaborator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import routes from "routes/routes";
import { Socket } from "socket.io-client";
import errorHandler from "utils/error-handler";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";

interface IAddCollaboratorFormValues {
  email: string;
}

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const useScriptDocument = ({ socket }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const { createNewInvite } = useInvite();
  const [collaboratorsList, setCollaboratorsList] =
    useState<ICollaboratorList>();
  const { listAllCollaborators } = useScriptsApi();
  const { query, push } = useRouter();
  const user = useUserStore((state) => state.user);

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

  useEffect(() => {
    async function getAllCollaboratorsFunc() {
      if (typeof query.id === "string") {
        const res = await listAllCollaborators(query.id as string);
        console.log(res);

        setCollaboratorsList(res.data.script);
      }
    }

    getAllCollaboratorsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);

  const removeCollaborator = (collaboratorId: string) => () => {
    socket.emit("removeCollaborator", collaboratorId);
  };

  useEffect(() => {
    socket.on("collaboratorLeaves", (collaboratorId) => {
      if (collaboratorsList) {
        const removedUser = collaboratorsList.collaborators.find(
          (c) => c._id === collaboratorId
        );
        if (removedUser) {
          user.email === removedUser.email &&
            push(routes.home.url, undefined, { shallow: true });
          toast.success(`${removedUser.email} removed from project`);
        }
      }
    });
  }, []);

  const onSubmit = async (data: IAddCollaboratorFormValues) => {
    try {
      setLoading(true);
      console.log(data);
      const res = await createNewInvite({
        email: data.email,
        scriptId: query.id as string,
      });
      console.log(res);
      reset({ email: "" });
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    onSubmit,
    register,
    handleSubmit,
    errors,
    openInfoCollaborator,
    openListCollaborator,
    activeButton,
    collaboratorsList,
    removeCollaborator,
  };
};

export default useScriptDocument;
