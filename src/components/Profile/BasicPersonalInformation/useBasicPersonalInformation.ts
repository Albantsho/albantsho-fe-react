import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import useUserStore from "store/user.store";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";
import { updateProfileSchema } from "./validation/updateProfile.validation";

interface IProps {
  userProfile: IUserProfile;
}

interface IUpdateProfileFormValues {
  first_name: string;
  last_name: string;
  image: FileList;
}

const useBasicPersonalInformation = ({ userProfile }: IProps) => {
  const [availableChangeValue, setAvailableChangeValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateUserInformation } = useAuthApi();
  const [imageProfile, setImageProfile] = useState<null | string>(null);
  const updateUserProfile = useUserStore((state) => state.updateUserProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateProfileFormValues>({
    defaultValues: {
      first_name: userProfile.firstName,
      last_name: userProfile.lastName,
    },
    resolver: yupResolver(updateProfileSchema),
  });

  const updateInformationUserAccess = () =>
    setAvailableChangeValue(!availableChangeValue);

  const onSubmit = async (data: IUpdateProfileFormValues) => {
    try {
      setLoading(true);
      const res = await updateUserInformation({
        firstName: data.first_name,
        lastName: data.last_name,
        image: data.image[0],
      });
      toast.success(res.message);

      const reader = new FileReader();
      reader.readAsDataURL(data.image[0]);
      reader.onload = () => {
        const url = window.decodeURI(reader.result as string);
        setImageProfile(url);
      };
      updateUserProfile(
        data.first_name,
        data.last_name,
        `/images/user/${userProfile._id}.jpg`
      );
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
    imageProfile,
  };
};

export default useBasicPersonalInformation;
