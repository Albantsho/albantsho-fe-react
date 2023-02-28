import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import { updateProfileSchema } from "./validation/updateProfile.validation";

interface IProps {
  userProfile: IUserProfile;
}

interface IUpdateProfileFormValues {
  firstName: string;
  lastName: string;
  image: FileList;
}

const queryClient = new QueryClient();

const useBasicPersonalInformation = ({ userProfile }: IProps) => {
  const [availableChangeValue, setAvailableChangeValue] = useState(false);
  const { updateUserInformation } = useAuthApi();
  const [imageProfile, setImageProfile] = useState<null | string>(null);
  const updateUserProfile = useUserStore((state) => state.updateUserProfile);
  const {
    mutate: updateUserInformationFunc,
    isLoading: loadingUpdateUserInformation,
  } = useMutation<
    any,
    Error,
    { firstName: string; lastName: string; image: FileList }
  >(
    (data) => {
      console.log(data);

      return updateUserInformation({
        firstName: data.firstName,
        lastName: data.lastName,
        image: data.image[0],
      });
    },
    {
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries(["user"]);
        toast.success(data.message);

        const reader = new FileReader();
        reader.readAsDataURL(variables.image[0]);
        reader.onload = () => {
          const url = window.decodeURI(reader.result as string);
          setImageProfile(url);
        };
        updateUserProfile(
          variables.firstName,
          variables.lastName,
          `/images/user/${userProfile._id}.jpg`
        );
        setAvailableChangeValue(false);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateProfileFormValues>({
    defaultValues: {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
    },
    resolver: yupResolver(updateProfileSchema),
  });

  const updateInformationUserAccess = () =>
    setAvailableChangeValue(!availableChangeValue);

  const onSubmit = async (data: IUpdateProfileFormValues) =>
    updateUserInformationFunc(data);

  return {
    updateInformationUserAccess,
    availableChangeValue,
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading: loadingUpdateUserInformation,
    imageProfile,
  };
};

export default useBasicPersonalInformation;
