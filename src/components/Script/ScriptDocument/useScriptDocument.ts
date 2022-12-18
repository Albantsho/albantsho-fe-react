import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { addCollaboratorSchema } from "./validation/addCollaborator.validation";
import { useForm } from "react-hook-form";
import useInvite from "apis/Invite.api";
import errorHandler from "utils/error-handler";
import { ICollaboratorList } from "interfaces/collaborator";
import useScriptsApi from "apis/Scripts.api";
import { useRouter } from "next/router";

interface IAddCollaboratorFormValues {
  email: string;
}

const useScriptDocument = () => {
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const { createNewInvite } = useInvite();
  const [collaboratorsList, setCollaboratorsList] =
    useState<ICollaboratorList>();
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();

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
        setCollaboratorsList(res.data.script);
      }
    }

    getAllCollaboratorsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);

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
  };
};

export default useScriptDocument;
