import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { updateProfileSchema } from "./validation/updateProfile.validation";

interface IProps {
  userProfile: IUserProfile[];
}

interface IUpdateProfileFormValues {
  first_name: string;
  last_name: string;
  image: FileList;
}

const useBasicPersonalInformation = ({ userProfile }: IProps) => {
  const [availableChangeValue, setAvailableChangeValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const divideFullName = userProfile[0].fullname.split(" ");
  const { updateUserInformation } = useAuthApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateProfileFormValues>({
    defaultValues: {
      first_name: divideFullName[0],
      last_name: divideFullName[1] && divideFullName[1],
    },
    resolver: yupResolver(updateProfileSchema),
  });

  const updateInformationUserAccess = () =>
    setAvailableChangeValue(!availableChangeValue);

  const onSubmit = async (data: IUpdateProfileFormValues) => {
    console.log(data);
    try {
      setLoading(true);
      const res = await updateUserInformation({
        fullname: `${data.first_name}${data.last_name}`,
        image: data.image[0],
      });
      console.log(res);
      setAvailableChangeValue(false);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateInformationUserAccess,
    availableChangeValue,
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};

export default useBasicPersonalInformation;
