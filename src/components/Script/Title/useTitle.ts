import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import dayjs, { Dayjs } from "dayjs";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { titleSchema } from "./validation/title.validation";

interface ITitleFormValues {
  title: string;
  writer: string;
  names: string;
  any: string;
}

interface IProps {
  script: IFullInformationScript;
}

const useTitle = ({ script }: IProps) => {
  const { query, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [dateValue, setDateValue] = useState<Dayjs | null>(
    dayjs(script.draftDate && script.draftDate)
  );
  const { updateCoverPageScript } = useScriptsApi();

  const handleChangeDateValue = (newValue: Dayjs | null) =>
    setDateValue(newValue);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitleFormValues>({
    defaultValues: {
      title: script.title,
      writer: script.writtenBy.join(" "),
      any: script.basedOn ? script.basedOn : "",
    },
    resolver: yupResolver(titleSchema),
  });

  const onSubmit = async (data: ITitleFormValues) => {
    try {
      setLoading(true);
      await updateCoverPageScript(
        {
          writtenBy: data.writer.split(" ").filter((name) => name),
          title: data.title,
          basedOn: data.any,
          draftDate: dateValue?.toISOString() as string,
        },
        query.id as string
      );
      push(routes.script.dynamicUrl(query.id as string));
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    control,
    onSubmit,
    handleSubmit,
    errors,
    loading,
    handleChangeDateValue,
    dateValue,
  };
};

export default useTitle;
