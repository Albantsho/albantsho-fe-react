import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import dayjs, { Dayjs } from "dayjs";
import { IResData } from "interfaces/response";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import { titleSchema } from "./validation/title.validation";

interface ITitleFormValues {
  title: string;
  writer: string;
  names: string;
  basedOn: string;
}

interface IProps {
  script: IFullInformationScript;
}

const useTitle = ({ script }: IProps) => {
  const { query, back } = useRouter();
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs(Date.now()));
  const { updateCoverPageScript } = useScriptsApi();

  const { mutate: updateCoverPageMutation, isLoading: loadingUpdateCoverPage } =
    useMutation<
      IResData<object>,
      Error,
      {
        payload: {
          title: string;
          writer: string;
          names: string;
          basedOn: string;
          draftDate: string;
        };
        scriptId: string;
      }
    >(
      (data) =>
        updateCoverPageScript(
          {
            basedOn: data.payload.basedOn,
            names: data.payload.names,
            draftDate: data.payload.draftDate,
            title: data.payload.title,
            writtenBy: data.payload.writer,
          },
          data.scriptId
        ),
      {
        onError: (error) => errorHandler(error),
        onSuccess: (data) => {
          successHandler(data.message);
          back();
        },
      }
    );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitleFormValues>({
    defaultValues: {
      title: script.title,
      writer: script.writtenBy ? script.writtenBy : "",
      basedOn: script.basedOn ? script.basedOn : "",
      names: script.names ? script.names : "",
    },
    resolver: yupResolver(titleSchema),
  });

  const handleChangeDateValue = (newValue: Dayjs | null) =>
    setDateValue(newValue);

  const onSubmit = async (data: ITitleFormValues) =>
    updateCoverPageMutation({
      scriptId: query.id as string,
      payload: {
        basedOn: data.basedOn,
        draftDate: `${dateValue}`,
        names: data.names,
        title: data.title,
        writer: data.writer,
      },
    });

  return {
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    loading: loadingUpdateCoverPage,
    handleChangeDateValue,
    dateValue,
  };
};

export default useTitle;
