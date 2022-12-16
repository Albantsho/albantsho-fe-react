import { yupResolver } from "@hookform/resolvers/yup";
import useScriptsApi from "apis/Scripts.api";
import dayjs, { Dayjs } from "dayjs";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { titleSchema } from "./validation/title.validation";

interface ITitleFormValues {
  title: string;
  writer: string;
  names: string;
  any: string;
}

const useTitle = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const { updateCoverPageScript } = useScriptsApi();

  const handleChangeDateValue = (newValue: Dayjs | null) =>
    setDateValue(newValue);

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
        }
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitleFormValues>({
    defaultValues: {
      title: script?.title,
    },
    resolver: yupResolver(titleSchema),
  });

  const onSubmit = async (data: ITitleFormValues) => {
    console.log(data, dateValue);
    console.log(dateValue?.toISOString());

    try {
      setLoading(true);
      const res = await updateCoverPageScript(
        { ...data, date: dateValue?.toISOString() },
        query.id as string
      );
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
    script,
    handleChangeDateValue,
    dateValue,
  };
};

export default useTitle;
