import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import useScriptsApi from "apis/Scripts.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Socket } from "socket.io-client";
import customHandler from "utils/custom-handler";
import errorHandler from "utils/error-handler";
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
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();

  const onSubmit = async (data: IRegisterFormValues) => {
    try {
      const res = await listAllCollaborators(query.id as string);
      const findEmail = res.script.collaborators.find(
        (s) => s.email === data.email
      );
      console.log(res);

      if (findEmail || res.script.author.email === data.email) {
        const res = socket.emit("createComment", {
          message: data.comment,
          positionX,
          positionY,
          mention: data.email,
        });
        console.log(res);

        setShowForm(false);
      } else {
        customHandler(
          "this user is not collaborated for this script, please enter a valid"
        );
      }
    } catch (error) {
      errorHandler(error);
    }
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
