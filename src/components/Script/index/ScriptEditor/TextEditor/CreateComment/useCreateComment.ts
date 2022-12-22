import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Socket } from "socket.io-client";
import * as Yup from "yup";

const createCommentSchema = Yup.object({
  comment: Yup.string().required().min(3).label("Comment"),
  email: Yup.string().email().required().label("Email"),
});

interface IRegisterFormValues {
  comment: string;
  email: string;
}

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  positionX: number;
  positionY: number;
  setShowFormStatus: boolean;
}

const useCreateComment = ({
  socket,
  positionX,
  positionY,
  setShowFormStatus,
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(createCommentSchema),
  });
  const [showForm, setShowForm] = useState(setShowFormStatus);

  const onSubmit = async (data: IRegisterFormValues) => {
    socket.emit("createComment", {
      message: data.comment,
      positionX,
      positionY,
      mention: data.email,
    });
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
