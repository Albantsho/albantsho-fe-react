import { yupResolver } from "@hookform/resolvers/yup";
import useAuthApi from "apis/Auth.api";
import { IUserProfile } from "interfaces/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  const [loading, setLoading] = useState(false);
  const { updateUserWithdrawInformation } = useAuthApi();
  const [defaultAccount, setDefaultAccount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const connectWallet = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.ethereum) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const allAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setDefaultAccount(allAccounts[0]);
        await updateUserWithdrawInformation({
          usdtTrc20Address: allAccounts[0],
        });
      } catch (error) {
        ("");
      }
    } else {
      setErrorMessage("Please Install Metamask");
    }
  };

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

  const onSubmit = async (data: IUpdateWithdrawalFormValues) => {
    try {
      setLoading(true);
      const res = await updateUserWithdrawInformation(data);
      toast.success(res.message);
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
    control,
    defaultAccount,
    connectWallet,
    errorMessage,
  };
};

export default usePersonalWithdrawalDetails;
