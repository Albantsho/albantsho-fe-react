import useContact from "apis/Contact.api";
import { IResData } from "interfaces/response";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import * as Yup from "yup";
import Logo from "./assets/Logo.svg";
import radial from "./assets/purple-radial.png";
import starsTwo from "./assets/stars-2.png";
import easy from "./assets/people-of-brooklyn-sitting-on-floor.png";
import stars from "./assets/stars.png";
import community from "./assets/community.png";
import market from "./assets/shopaholics-bust.png";
import SuccessAddWaitListModal from "./SuccessAddWaitListModal/SuccessAddWaitListModal";

const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function isEmailAddress(str: string) {
  return str.match(regex);
}

const WaitListLanding = () => {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [successAddWaitList, setSuccessAddWaitList] = useState(false);
  const [successAddWaitList2, setSuccessAddWaitList2] = useState(false);
  const { registerEmail } = useContact();

  const handleCloseSuccessAddWaitListModal = () => {
    setEmail("");
    setSuccessAddWaitList(false);
  };
  const handleCloseSuccessAddWaitListModal2 = () => {
    setEmail2("");
    setSuccessAddWaitList2(false);
  };

  const { mutate: registerEmailMutation, error } = useMutation<
    IResData<object>,
    Error,
    string
  >((data) => registerEmail(data), {
    onSuccess: (_data) => {
      successHandler("you’ve been successfully added to Albantsho’s waitlist");
      setSuccessAddWaitList(true);
    },
    onError: (error) => errorHandler(error),
  });

  const handleChangeValueEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const registerEmailFunc = async () => {
    registerEmailMutation(email);
  };

  const { mutate: registerEmailMutation2, error: error2 } = useMutation<
    IResData<object>,
    Error,
    string
  >((data) => registerEmail(data), {
    onSuccess: (_data) => {
      successHandler("you’ve been successfully added to Albantsho’s waitlist");
      setSuccessAddWaitList2(true);
    },
    onError: (error) => errorHandler(error),
  });

  const handleChangeValueEmail2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail2(e.target.value);

  const registerEmailFunc2 = async () => {
    registerEmailMutation2(email2);
  };

  return (
    <>
      <main className="bg-[#181025] overflow-hidden">
        <div className="px-8 max-w-screen-2xl mx-auto py-10 lg:px-28 min-h-screen relative">
          <div className="w-12 h-12 mx-auto mb-16">
            <Logo />
          </div>
          <div className="max-w-[800px] w-full absolute top-[412px] lg:top-[490px] text-center mx-auto">
            <Image src={stars} width={800} height={500} alt="stars" />
          </div>
          <div className="max-w-[800px] text-center mx-auto w-full right-0 left-0 absolute top-[412px] lg:top-[490px]">
            <Image src={radial} width={800} height={500} alt="stars" />
          </div>
          <h1
            style={{ fontFamily: "Space Grotesk" }}
            className="text-center mt-8 sm:mt-12 font-bold leading-[45px] sm:leading-[60px] lg:mt-16 text-[38px] z-10 sm:text-[52px] lg:text-6xl text-white mb-6 lg:mb-8"
          >
            A looong overdue <br className="hidden md:block" />
            revolution in screenwriting
          </h1>
          <p className="text-center z-10 text-white inter max-w-lg mx-auto text-xl font-normal">
            Write better screenplays and be discovered by top producers to bring
            them to life.
          </p>
          <div className="max-w-lg flex mx-auto gap-3 mt-16 flex-col sm:flex-row">
            <div className="flex flex-col flex-1 relative">
              <label
                htmlFor="wait-list"
                className="font-bold inter text-white left-0 -top-10 absolute"
              >
                Email
              </label>
              <input
                placeholder="Enter your email"
                onChange={handleChangeValueEmail}
                value={email}
                className="rounded-lg z-10 h-12 max-w-xs w-full px-2 border-none outline-none min-w-full block sm:min-w-[300px] md:min-w-[330px]"
                id="wait-list"
              />
              {error &&
                error.message === "Request failed with status code 409" && (
                  <span className="mr-auto mt-2 text-[13px] text-success-300">
                    You’re already on the waitlist!
                  </span>
                )}
              {error &&
                error.message === "Request failed with status code 400" && (
                  <span className="mr-auto mt-2 text-[13px] text-[#D32D2D]">
                    {!email ? (
                      "The field cannot be empty. Please input your email."
                    ) : (
                      <>
                        {isEmailAddress(email)
                          ? ""
                          : "The email is invalid. Please enter validEmail."}
                      </>
                    )}
                  </span>
                )}
            </div>
            <button
              onClick={registerEmailFunc}
              className="bg-[#573195] inter max-h-[50px] cursor-pointer text-white py-4 px-8 z-10 rounded-lg font-semibold"
            >
              Join Waitlist
            </button>
          </div>
          <h2 className="text-white font-normal text-3xl sm:text-4xl lg:text-[40px] mt-36 sm:mt-40 z-10 lg:mt-52 inter mb-8 text-center">
            Reach Your Great Story
          </h2>
          <div className="py-7 sm:py-8 lg:py-10 text-sm">
            <span className="bg-white/10 inter font-medium rounded-full px-4 text-white py-2">
              Features
            </span>
            <div className="py-3 flex flex-wrap gap-10 sm:gap-14 md:gap-20 lg:gap-24 justify-center xl:justify-between">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
                className="min-h-[450px] p-5 rounded-3xl pt-8 sm:pt-10 lg:pt-12 justify-start flex flex-col items-end md:px-8 lg:px-10 max-w-[320px] w-full"
              >
                <Image
                  loading="eager"
                  src={easy}
                  width={200}
                  height={200}
                  className="mx-auto"
                  alt="easy"
                />
                <h6
                  style={{
                    backgroundImage:
                      "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="inter text-2xl my-7 font-medium text-center mx-auto"
                >
                  Easy Use
                </h6>
                <p className="text-[#B4BCD0] inter font-medium max-w-[220px] text-center mx-auto text-[15px]">
                  An easy interface with all the tools needed by beginner,
                  intermediate and advanced writers
                </p>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
                className="min-h-[450px] p-5 rounded-3xl pt-8 sm:pt-10 lg:pt-12 justify-start flex flex-col items-end md:px-8 lg:px-10 max-w-[320px] w-full"
              >
                <Image
                  loading="eager"
                  src={community}
                  width={200}
                  height={200}
                  className="mx-auto min-h-[200px]"
                  alt="community"
                />
                <h6
                  style={{
                    backgroundImage:
                      "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="inter text-2xl my-7 font-medium text-center mx-auto"
                >
                  Community
                </h6>
                <p className="text-[#B4BCD0] inter font-medium max-w-[220px] text-center mx-auto text-[15px]">
                  Find your tribe, build relationships and writing circles Meet
                  other writers, mentors, industry experts and film enthusiasts
                </p>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
                className="min-h-[450px] p-5 rounded-3xl pt-8 sm:pt-10 lg:pt-12 justify-start flex flex-col items-end md:px-8 lg:px-10 max-w-[320px] w-full"
              >
                <Image
                  loading="eager"
                  src={market}
                  width={200}
                  height={200}
                  className="mx-auto"
                  alt="market"
                />
                <h6
                  style={{
                    backgroundImage:
                      "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="inter text-2xl my-7 font-medium text-center mx-auto"
                >
                  Market Place
                </h6>
                <p className="text-[#B4BCD0] inter font-medium max-w-[220px] text-center mx-auto text-[15px]">
                  A market place to sell your story to buying producers who will
                  take it from script to the big screen
                </p>
              </div>
            </div>
          </div>
          <div className="py-14 relative">
            <div className="max-w-[800px] w-full absolute -bottom-48 left-0 right-0 text-center mx-auto">
              <Image src={starsTwo} width={800} alt="stars" />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
                boxShadow: "0px 0px 400px 81px rgba(255,175,25,0.26)",
              }}
              className="py-5 -mx-3 px-10 rounded-3xl text-center"
            >
              <span className="bg-black/20 w-28 inter text-[13px] font-medium rounded-full px-2 mx-auto block text-white py-2">
                While You Wait
              </span>
              <h2
                style={{ fontFamily: "Space Grotesk" }}
                className="text-center mt-8 sm:mt-12 font-bold lg:mt-16 text-4xl sm:text-5xl lg:text-6xl #1B1F23 mb-5 lg:mb-8"
              >
                Join our free Workshop
              </h2>
              <p className="text-center inter text-[#2E2E2E] max-w-xl mx-auto font-normal text-xl mb-5 lg:mb-8">
                Take your story from an idea to screenplay at the iDraft
                Screenwriting Workshop- an intense 8 weeks learning experience
                with industry mentors, masterclasses and practical lessons.
              </p>
              <div className="flex flex-col-reverse sm:flex-row gap-4 lg:gap-8 justify-center pb-14 lg:pb-20">
                <Link
                  href="https://blog.albantsho.com/idraft-2023-is-here/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="border-[3px] z-10 border-[#1B1F23] font-bold bg-transparent text-[#1B1F23] grotesque-pro py-4 px-8 rounded-lg"
                >
                  Learn More
                </Link>
                <Link
                  href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd-p3Eg4h00ok2RlKv778U6yBWirxbLLsGieN5FoRyiSZZ7Vw/viewform?usp=send_form"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-[#573195] font-bold grotesque-pro text-white py-4 px-8 rounded-lg z-10"
                >
                  Apply to Join
                </Link>
              </div>
            </div>
            <div className="text-center pt-20 sm:pt-28 lg:pt-40">
              <h4 className="text-[#F7F5F8] sm:max-w-full inter font-medium text-2xl">
                Join the revolution.
                <br className="sm:hidden" /> Join the waitlist
              </h4>
              <div className="max-w-lg flex mx-auto gap-3 mt-16 flex-col sm:flex-row">
                <div className="flex z-10 flex-col flex-1 relative">
                  <label
                    htmlFor="wait-list2"
                    className="font-bold text-white inter left-0 -top-10 absolute"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    onChange={handleChangeValueEmail2}
                    value={email2}
                    className="rounded-lg h-12 max-w-xs w-full px-2 border-none outline-none min-w-full block sm:min-w-[300px] md:min-w-[330px]"
                    id="wait-list2"
                  />
                  {error2 &&
                    error2.message ===
                      "Request failed with status code 409" && (
                      <span className="mr-auto mt-2 text-[13px] text-success-300">
                        You’re already on the waitlist!
                      </span>
                    )}
                  {error2 &&
                    error2.message ===
                      "Request failed with status code 400" && (
                      <span className="mr-auto mt-2 text-[13px] text-[#D32D2D]">
                        {!email2 ? (
                          "The field cannot be empty. Please input your email."
                        ) : (
                          <>
                            {isEmailAddress(email2)
                              ? ""
                              : "The email is invalid. Please enter validEmail."}
                          </>
                        )}
                      </span>
                    )}
                </div>
                <button
                  onClick={registerEmailFunc2}
                  className="bg-[#573195] z-10 inter max-h-[50px] cursor-pointer text-white py-4 px-8 rounded-lg font-semibold"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          <footer className="flex flex-col-reverse sm:flex-row gap-10 justify-between mt-16 lg:mt-24 items-center py-4 pb-8">
            <div>
              <p className="text-[#F7F5F8] inter">© Albantsho 2023</p>
            </div>
            <div className="flex gap-4 justify-between flex-1 w-full flex-wrap sm:justify-end sm:gap-6 lg:gap-8">
              <Link
                href="https://www.instagram.com/albantsho/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="cursor-pointer inter z-10 text-[#F7F5F8]"
              >
                Instagram
              </Link>
              <Link
                href="https://www.twitter.com/albantsho"
                target="_blank"
                referrerPolicy="no-referrer"
                className="cursor-pointer inter z-10 text-[#F7F5F8]"
              >
                Twitter
              </Link>
              <Link
                href="https://www.facebook.com/albantsho"
                target="_blank"
                referrerPolicy="no-referrer"
                className="cursor-pointer z-10 inter text-[#F7F5F8]"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/company/albantsho/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="cursor-pointer z-10 inter text-[#F7F5F8]"
              >
                LinkedIn
              </Link>
            </div>
          </footer>
        </div>
      </main>
      <SuccessAddWaitListModal
        email={email}
        successAddWaitList={successAddWaitList}
        handleCloseSuccessAddWaitListModal={handleCloseSuccessAddWaitListModal}
      />
      <SuccessAddWaitListModal
        email={email2}
        successAddWaitList={successAddWaitList2}
        handleCloseSuccessAddWaitListModal={handleCloseSuccessAddWaitListModal2}
      />
    </>
  );
};

export default WaitListLanding;
