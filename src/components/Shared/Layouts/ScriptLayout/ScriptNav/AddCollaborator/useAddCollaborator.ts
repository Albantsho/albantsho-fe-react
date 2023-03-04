import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";
import { useForm } from "react-hook-form";
import useInvite, { type ICreateNewInvitePayload } from "apis/Invite.api";
import errorHandler from "utils/error-handler";
import { useRouter } from "next/router";
import { IResData } from "interfaces/response";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";

interface IAddCollaboratorFormValues {
  email: string;
}

const queryClient = new QueryClient();

const useAddCollaborator = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { createNewInvite } = useInvite();
  const { query } = useRouter();

  const { mutate: createInviteMutate, isLoading: loadingCreateInvite } =
    useMutation<IResData<object>, Error, ICreateNewInvitePayload>(
      (data) => createNewInvite(data),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries([
            "notification",
            "invite",
            "collaborator",
          ]);
          reset({ email: "" });
          handleCloseAddCollaborator();
          toast.success(data.message);
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

  const handleOpenAddCollaborator = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAddCollaborator = () => {
    setAnchorEl(null);
  };
  const openAddCollaborator = Boolean(anchorEl);

  const onSubmit = async (data: IAddCollaboratorFormValues) =>
    createInviteMutate({
      email: data.email,
      scriptId: query.id as string,
    });

  return {
    handleOpenAddCollaborator,
    handleCloseAddCollaborator,
    openAddCollaborator,
    anchorEl,
    loading: loadingCreateInvite,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};

export default useAddCollaborator;
