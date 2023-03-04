import { IconButton, Modal, Slide } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import TextEditor from "@shared/TextEditor/TextEditor";
import useContact from "apis/Contact.api";
import { IContact } from "interfaces/contact";
import { IResData } from "interfaces/response";
import { CustomElement } from "interfaces/slate";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

interface IProps {
  openAnswerToContactModal: boolean;
  setOpenAnswerToContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  contact: IContact;
  refetch: any;
}

const queryClient = new QueryClient();

const AnswerToContactModal = ({
  openAnswerToContactModal,
  setOpenAnswerToContactModal,
  contact,
  refetch,
}: IProps) => {
  const { answerToContact } = useContact();

  const { mutate: answerToContactMutation, isLoading: loadingAnswerToContact } =
    useMutation<IResData<object>, Error, { answer: string; contactId: string }>(
      (data) => answerToContact(data.contactId, { answer: data.answer }),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          refetch();
          successHandler(data.message);
          queryClient.invalidateQueries("contact");
          setOpenAnswerToContactModal(false);
        },
      }
    );

  const initialValue: CustomElement[] = [
    { type: "paragraph", children: [{ text: "" }] },
  ];
  const textEditorValue = useRef<string>("");

  const handleCloseAnswerToContact = () => setOpenAnswerToContactModal(false);

  const handleAnswerToContact = async () =>
    answerToContactMutation({
      contactId: contact._id,
      answer: textEditorValue.current,
    });

  return (
    <Modal
      className="px-5"
      open={openAnswerToContactModal}
      onClose={handleCloseAnswerToContact}
    >
      <Slide direction="up" in={openAnswerToContactModal}>
        <div className="px-6 relative bg-white w-full mt-28 max-w-screen-2xl flex flex-col  py-16 rounded-lg">
          <IconButton
            onClick={handleCloseAnswerToContact}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <TextEditor
            initialValue={initialValue}
            textEditorValue={textEditorValue}
          />
          <div className="flex w-full justify-start gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingAnswerToContact}
              onClick={handleAnswerToContact}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseAnswerToContact} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AnswerToContactModal;
