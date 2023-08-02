"use client";

import useContact from "apis/Contact.api";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "react-query";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NameLogo from "../NameLogo/NameLogo";

const smallExternalLinks = [
  {
    title: "Slack",
    url: "https://join.slack.com/t/albantsho/shared_invite/zt-r68kz7mp-Qw6QUpjAWjMstNr4CwovfA",
  },
  { title: "Hire Us", url: "https://calendly.com/albantsho/30min" },
  { title: "Linkedin", url: "https://www.linkedin.com/company/albantsho/" },
  { title: "Instagram", url: "https://www.instagram.com/albantsho/" },
  { title: "Twitter", url: "https://www.twitter.com/albantsho" },
];
const largeExternalLinks = [
  { title: "Hire Us", url: "https://calendly.com/albantsho/30min" },
  {
    title: "Slack",
    url: "https://join.slack.com/t/albantsho/shared_invite/zt-r68kz7mp-Qw6QUpjAWjMstNr4CwovfA",
  },
  { title: "Twitter", url: "https://www.twitter.com/albantsho" },
  { title: "Instagram", url: "https://www.instagram.com/albantsho/" },
  { title: "Linkedin", url: "https://www.linkedin.com/company/albantsho/" },
];

export default function Footer() {
  const [readOnly, setReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { registerEmail } = useContact();
  const { mutateAsync, isSuccess, isLoading, isError } = useMutation(
    () => registerEmail(inputValue),
    {}
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  async function onMutate() {
    try {
      setErrorMessage("");
      await mutateAsync();
      setErrorMessage("");
    } catch (error: any) {
      if (error && error.message) {
        if (error.message !== "Request failed with status code 409") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("409");
        }
      }
    }
  }

  function onFocus() {
    setReadOnly(false);
  }
  function onBlur() {
    setReadOnly(true);
  }

  return (
    <footer className="bg-black py-[60px] sm:py-12 lg:py-[60px] px-3 sm:px-4 md:px-5">
      <div className="rounded-2xl px-4 py-12 sm:px-12 lg:px-8 max-w-[1168px] mx-auto bg-[#111111]">
        <div className="lg:flex lg:gap-[30px] space-y-8 lg:space-y-0 lg:my-10">
          <div className="lg:space-y-3">
            <div className="flex gap-2 justify-center items-center lg:justify-start lg:px-3">
              <Logo className="!max-w-[32px] h-full sm:!max-w-[32px] sm:h-[32px] lg:!max-w-[32px]" />
              <NameLogo className="!max-w-[210px] !sm:max-w-[210px] !lg:sm:max-w-[210px]" />
            </div>
            <p className="text-base min-[1100px]:w-[325px] text-white sm:text-lg font-medium mt-2 text-center">
              Created by storytellers for storytellers.
            </p>
          </div>
          <div className="bg-[#FDFEFE] py-6 px-4 max-w-[738px] mx-auto rounded-lg  text-center space-y-6 sm:space-y-0">
            <div className="">
              <input
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                readOnly={readOnly}
                className={`${
                  errorMessage.length && errorMessage !== "409"
                    ? "text-[#B72F4F]"
                    : isSuccess || (isError && errorMessage === "409")
                    ? "text-[#70CD32]"
                    : "text-[#999999]"
                } outline-none bg-transparent w-full sm:overflow-auto truncate text-[28px] sm:text-4xl lg:text-5xl leading-none font-semibold p-0`}
                placeholder="Enter your email"
              />
              <div className="sm:flex justify-between mt-3 items-end">
                <div className="space-y-2 sm:space-y-1">
                  <p
                    className={`font-medium sm:text-start min-h-[28px] sm:text-lg ${
                      errorMessage.length && errorMessage !== "409"
                        ? "text-[#B72F4F]"
                        : isSuccess || (isError && errorMessage === "409")
                        ? "text-[#70CD32]"
                        : "text-[#999999]"
                    }`}
                  >
                    {isSuccess
                      ? "We’ve added your mail for early access"
                      : isError && errorMessage === "409"
                      ? "This email address is already on the waitlist"
                      : errorMessage.length
                      ? "That doesn't look like an email address. Try again."
                      : ""}
                  </p>
                  <p className="text-[#333333] text-center sm:text-start text-base font-medium sm:text-lg">
                    1300+ people already joined!
                  </p>
                </div>
                <Button
                  onClick={onMutate}
                  className="sm:max-w-[190px] hidden sm:block  !px-1 sm:min-w-[190px] border-none"
                >
                  Join Early Access
                </Button>
              </div>
            </div>
            <Button
              onClick={onMutate}
              className="sm:max-w-[190px] sm:hidden !px-1 sm:min-w-[190px] border-none"
            >
              Join Early Access
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:mt-10 items-center md:flex-row md:justify-between space-y-10 md:space-y-0">
          <p className="text-[#999999] mt-14 md:mt-0 font-medium text-center">
            ©2023 Albantsho Limited
          </p>
          <div className="flex md:hidden flex-wrap-reverse max-w-[266px] mx-auto justify-between gap-y-7">
            {smallExternalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className={`${
                  link.title === "Hire Us" ? "bg-[#23005C] rounded" : ""
                } p-2 font-medium text-white`}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex flex-wrap-reverse sm:flex-nowrap justify-between gap-y-7">
            {largeExternalLinks.map((link, i) => (
              <React.Fragment key={i}>
                <Link
                  href={link.url}
                  className={`${
                    link.title === "Hire Us" ? "bg-[#23005C] rounded" : ""
                  } p-2 font-medium text-white`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  {link.title}
                </Link>
                {largeExternalLinks.length > i + 1 && (
                  <hr className="w-[1px] h-[18px] my-auto bg-white mx-3 lg:mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
