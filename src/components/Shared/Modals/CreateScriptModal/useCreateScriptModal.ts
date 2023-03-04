import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi, { ICreateNewScriptPayload } from "apis/Scripts.api";
import { IFullInformationScript } from "interfaces/script";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import { createScriptSchema } from "./validation/createScript.validation";

interface ICreateScript {
  title: string;
  tagline: string;
}
interface IProps {
  setOpenCreateScript: React.Dispatch<React.SetStateAction<boolean>>;
}

const queryClient = new QueryClient();

const useCreateScriptModal = ({ setOpenCreateScript }: IProps) => {
  const { createNewScript } = useScriptsApi();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ICreateScript>({
    resolver: yupResolver(createScriptSchema),
  });
  const { mutate, isLoading } = useMutation<
    { script: IFullInformationScript },
    Error,
    ICreateNewScriptPayload
  >((newScript) => createNewScript(newScript), {
    onError: (error) => {
      errorHandler(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["script"], {
        exact: true,
        stale: true,
      });
      resetField("title");
      resetField("tagline");
      setOpenCreateScript(false);
    },
  });

  const onSubmit = async (data: ICreateScript) => {
    mutate(data);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    loading: isLoading,
  };
};

export default useCreateScriptModal;
