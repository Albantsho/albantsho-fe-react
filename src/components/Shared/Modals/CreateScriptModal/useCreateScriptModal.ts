import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { createScriptSchema } from "./validation/createScript.validation";

interface ICreateScript {
  title: string;
  tagline: string;
}
interface IProps {
  setOpenCreateScript: Dispatch<SetStateAction<boolean>>;
}

const useCreateScriptModal = ({ setOpenCreateScript }: IProps) => {
  const [loading, setLoading] = useState(false);
  const { createNewScript } = useScriptsApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateScript>({
    resolver: yupResolver(createScriptSchema),
  });

  const onSubmit = async (data: ICreateScript) => {
    try {
      setLoading(true);
      await createNewScript(data);
      setOpenCreateScript(false);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    loading,
  };
};

export default useCreateScriptModal;
