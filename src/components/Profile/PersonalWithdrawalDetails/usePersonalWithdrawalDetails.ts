import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import errorHandler from "utils/error-handler";
import { updateWithdrawalSchema } from "./validation/updateWithdrawal.validation";

interface IProps {
  userProfile: IUserProfile;
}

interface IUpdateWithdrawalFormValues {
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  usdtTrc20Address: string;
}

const usePersonalWithdrawalDetails = ({ userProfile }: IProps) => {
  const [availableChangeValue, setAvailableChangeValue] = useState(false);
  const { updateUserWithdrawInformation } = useAuthApi();
  const {
    mutate: updatePersonalInformationFunc,
    isLoading: loadingUpdatePersonalInformation,
  } = useMutation<any, Error, IUpdateWithdrawalFormValues>(
    (data) => updateUserWithdrawInformation(data),
    {
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: (data) => {
        toast.success(data.message);
        setAvailableChangeValue(false);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUpdateWithdrawalFormValues>({
    defaultValues: {
      bankName: userProfile.bankName
        ? userProfile.bankName
        : "Guaranty Trust Bank",
      bankAccountName: userProfile.bankAccountName
        ? userProfile.bankAccountName
        : "",
      bankAccountNumber: userProfile.bankAccountNumber
        ? userProfile.bankAccountNumber
        : "",
      usdtTrc20Address: userProfile.usdtTrc20Address
        ? userProfile.usdtTrc20Address
        : "",
    },
    resolver: yupResolver(updateWithdrawalSchema),
  });

  const updateInformationBankAccess = () =>
    setAvailableChangeValue(!availableChangeValue);

  const onSubmit = async (data: IUpdateWithdrawalFormValues) =>
    updatePersonalInformationFunc(data);

  return {
    updateInformationBankAccess,
    availableChangeValue,
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading: loadingUpdatePersonalInformation,
    control,
  };
};

export default usePersonalWithdrawalDetails;
