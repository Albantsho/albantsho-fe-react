import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const createCommentSchema = Yup.object({
  comment: Yup.string().required().min(3).label("Comment"),
  email: Yup.string().email().required().label("Email"),
});

interface IRegisterFormValues {
  comment: string;
  email: string;
}

const useCreateComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(createCommentSchema),
  });
  const [showForm, setShowForm] = useState(true);

  const onSubmit = async (data: IRegisterFormValues) => {
    console.log(data);
    setShowForm(false);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errors,
    showForm,
  };
};

export default useCreateComment;
