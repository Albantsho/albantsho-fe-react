import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";
import { useForm } from "react-hook-form";
import useInvite from "apis/Invite.api";
import errorHandler from "utils/error-handler";

interface IAddCollaboratorFormValues {
  email: string;
}

const useAddCollaborator = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { createNewInvite } = useInvite();

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

  const onSubmit = async (data: IAddCollaboratorFormValues) => {
    try {
      setLoading(true);
      console.log(data);
      // const res = await createNewInvite({});
      reset({ email: "" });
      handleCloseAddCollaborator();
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleOpenAddCollaborator,
    handleCloseAddCollaborator,
    openAddCollaborator,
    anchorEl,
    loading,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};

export default useAddCollaborator;
