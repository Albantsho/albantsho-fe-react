import { IconButton, SvgIcon, Typography } from "@mui/material";
import { IContact } from "interfaces/contact";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";
import { AiOutlineEdit, AiOutlineFileDone } from "react-icons/ai";
import AdminAnswerModal from "./AdminAnswerModal/AdminAnswerModal";
import ContactImage from "./assets/contact-image.png";

const AnswerToContactModal = dynamic(
  () => import("./AnswerToContactModal/AnswerToContactModal")
);

interface IProps {
  contact: IContact;
  refetch: any;
}

const Contact = ({ contact, refetch }: IProps) => {
  const { _id, createdAt, email, message, answered, answer } = contact;
  const [openAnswerToContactModal, setOpenAnswerToContactModal] =
    useState(false);
  const [openAdminAnswerToContactModal, setOpenAdminAnswerToContactModal] =
    useState(false);

  const handleOpenAnswerToContactModal = () =>
    setOpenAnswerToContactModal(true);
  const handleOpenAdminAnswerToContactModal = () =>
    setOpenAdminAnswerToContactModal(true);
  const handleCloseAdminAnswerToContactModal = () =>
    setOpenAdminAnswerToContactModal(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex bg-white flex-col justify-between md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start min-h-[155px]"
      >
        <div className="flex gap-3 lg:gap-6">
          <Image
            loading="lazy"
            className="rounded-lg h-[76px] min-w-[76px] w-[76px]"
            width={76}
            height={76}
            src={ContactImage}
            alt="contact"
          />

          <div className="sm:max-w-xl sm:w-full leading-none">
            <Typography
              gutterBottom
              variant="h6"
              className="text-primary-700 futura font-medium leading-none break-words"
            >
              {email}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              className="text-primary-700 futura font-medium leading-none break-words"
            >
              {new Date(createdAt).toLocaleDateString("en-NI", {
                dateStyle: "full",
              })}
            </Typography>
            <Typography variant="caption" className="leading-4">
              {message}
            </Typography>
          </div>
        </div>
        <div className="ml-auto flex md:self-start lg:self-center xl:self-start gap-3 md:gap-1">
          {!answered ? (
            <IconButton
              onClick={handleOpenAnswerToContactModal}
              color="primary"
            >
              <SvgIcon
                inheritViewBox
                fontSize="medium"
                className="text-primary-700"
                component={AiOutlineEdit}
              />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleOpenAdminAnswerToContactModal}
              color="primary"
            >
              <SvgIcon
                inheritViewBox
                fontSize="medium"
                className="text-primary-700"
                component={AiOutlineFileDone}
              />
            </IconButton>
          )}
        </div>
      </div>
      <Suspense fallback={null}>
        {openAnswerToContactModal ? (
          <AnswerToContactModal
            refetch={refetch}
            contact={contact}
            openAnswerToContactModal={openAnswerToContactModal}
            setOpenAnswerToContactModal={setOpenAnswerToContactModal}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openAdminAnswerToContactModal ? (
          <AdminAnswerModal
            openAdminAnswerToContactModal={openAdminAnswerToContactModal}
            handleCloseAdminAnswerToContactModal={
              handleCloseAdminAnswerToContactModal
            }
            adminAnswer={answer}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default Contact;
