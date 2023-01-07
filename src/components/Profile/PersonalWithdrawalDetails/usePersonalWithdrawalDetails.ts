import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import errorHandler from "utils/error-handler";
import { updateWithdrawalSchema } from "./validation/updateWithdrawal.validation";

interface IProps {
  userProfile: IUserProfile;
}

interface IUpdateWithdrawalFormValues {
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
}

const usePersonalWithdrawalDetails = ({ userProfile }: IProps) => {
  const [availableChangeValue, setAvailableChangeValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateUserInformation, updateUserWithdrawInformation } = useAuthApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateWithdrawalFormValues>({
    defaultValues: {
      bank_name: userProfile.bank_name ? userProfile.bank_name : "",
      bank_account_name: userProfile.bank_account_name
        ? userProfile.bank_account_name
        : "",
      bank_account_number: userProfile.bank_account_number
        ? userProfile.bank_account_number
        : "",
    },
    resolver: yupResolver(updateWithdrawalSchema),
  });

  const updateInformationBankAccess = () =>
    setAvailableChangeValue(!availableChangeValue);

  const onSubmit = async (data: IUpdateWithdrawalFormValues) => {
    try {
      setLoading(true);
      const res = await updateUserWithdrawInformation(data);
      setAvailableChangeValue(false);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateInformationBankAccess,
    availableChangeValue,
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};

export default usePersonalWithdrawalDetails;
