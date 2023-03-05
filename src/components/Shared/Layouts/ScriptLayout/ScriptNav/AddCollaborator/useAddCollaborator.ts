import { yupResolver } from "@hookform/resolvers/yup";
import useInvite, { type ICreateNewInvitePayload } from "apis/Invite.api";
import { IResData } from "interfaces/response";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";

interface IAddCollaboratorFormValues {
  email: string;
}

interface IProps {
  refetch: any;
}

const queryClient = new QueryClient();

const useAddCollaborator = ({ refetch }: IProps) => {
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
          refetch();
          queryClient.invalidateQueries([
            "notification",
            "invite",
            "collaborator",
          ]);
          reset({ email: "" });
          handleCloseAddCollaborator();
          successHandler(data.message);
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
