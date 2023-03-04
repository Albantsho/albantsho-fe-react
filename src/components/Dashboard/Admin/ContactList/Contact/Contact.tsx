import { IconButton, SvgIcon, Typography } from "@mui/material";
import { IContact } from "interfaces/contact";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineFileDone } from "react-icons/ai";
import AnswerToContactModal from "./AnswerToContactModal/AnswerToContactModal";
import ContactImage from "./assets/contact-image.png";

interface IProps {
  contact: IContact;
}

const Contact = ({ contact }: IProps) => {
  const { _id, createdAt, email, message, answered } = contact;
  const [openAnswerToContactModal, setOpenAnswerToContactModal] =
    useState(false);

  const handleOpenAnswerToContactModal = () =>
    setOpenAnswerToContactModal(true);

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
          {answered ? (
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
            <IconButton color="primary">
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
      <AnswerToContactModal
        contact={contact}
        openAnswerToContactModal={openAnswerToContactModal}
        setOpenAnswerToContactModal={setOpenAnswerToContactModal}
      />
    </>
  );
};

export default Contact;
