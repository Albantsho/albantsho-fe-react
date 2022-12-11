import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";
import { useForm } from "react-hook-form";
import useInvite from "apis/Invite.api";
import errorHandler from "utils/error-handler";

interface IAddCollaboratorFormValues {
  email: string;
}

const useScriptDocument = () => {
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
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

  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);

  const onSubmit = async (data: IAddCollaboratorFormValues) => {
    try {
      setLoading(true);
      console.log(data);
      // const res = await createNewInvite({});
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
  };
};

export default useScriptDocument;
