import useContact from "apis/Contact.api";
import { IResData } from "interfaces/response";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import community from "./assets/community.png";
import Logo from "./assets/Logo.svg";
import Arrow from "./assets/Arrows.svg";
import Chair from "./assets/Chair.svg";
import easy from "./assets/people-of-brooklyn-sitting-on-floor.png";
import radial from "./assets/purple-radial.png";
import market from "./assets/shopaholics-bust.png";
import starsTwo from "./assets/stars-2.png";
import stars from "./assets/stars.png";
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
      setSuccessAddWaitList(true);
    },
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
      setSuccessAddWaitList2(true);
    },
  });

  const handleChangeValueEmail2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail2(e.target.value);

  const registerEmailFunc2 = async () => {
    registerEmailMutation2(email2);
  };

  return (
    <>
      <main className="bg-[#181025] overflow-hidden">
        <section
          style={{
            background:
              "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
          }}
          className="h-[122px] items-end sm:max-h-[64px] md:h-full flex justify-center md:items-center"
        >
          <div className="max-w-[calc(100%-6vw)] sm:max-w-[690px] py-4 lg:py-[22px] w-full mx-auto flex sm:justify-between gap-[9px] flex-row justify-center px-3 sm:px-7 items-center">
            <div className="flex items-center gap-[10px] md:gap-[18px]">
              <div className="h-[18px] min-w-[16px] w-4">
                <Chair />
              </div>
              <p className="text-[clamp(8px,12vw,14px)] text-[#1B1F23] font-normal leading-5">
                Apply to join our free 8 weeks screenwriting workshop.
              </p>
            </div>
            <Link
              href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd-p3Eg4h00ok2RlKv778U6yBWirxbLLsGieN5FoRyiSZZ7Vw/viewform?usp=send_form"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inter min-w-[114.1px] border border-[#CFCFCF] rounded-[4px] flex gap-1 bg-white font-medium text-sm py-2 px-[10px] leading-4 text-black"
            >
              Apply Now
              <span className="inline-block w-4 h-4">
                <Arrow />
              </span>
            </Link>
          </div>
        </section>
        <div className="px-4 max-w-screen-2xl mx-auto pt-12 lg:pt-10 pb-20 lg:pb-10 lg:px-10 xl:px-14 2xl:px-[119px] min-h-screen relative">
          <div className="w-[46px] h-[50px] mx-auto mb-20 lg:mb-[72px]">
            <Logo />
          </div>
          <div className="max-w-[800px] w-full absolute top-[672px] md:top-[340px] lg:top-[270px] text-center mx-auto right-0 -left-24">
            <Image src={stars} width={800} height={500} alt="stars" />
          </div>
          <div className="max-w-[800px] z-0 text-center mx-auto w-full right-0 left-0 absolute top-[712px] md:top-[520px] lg:top-[420px]">
            <Image
              className="z-0 opacity-80"
              src={radial}
              width={800}
              height={500}
              alt="stars"
            />
          </div>
          <h1
            style={{ fontFamily: "Space Grotesk" }}
            className="text-center font-bold text-[clamp(36px,13vw,60px)] leading-smallHead sm:leading-largeHead -mt-[12px] z-10 text-white -tracking-[0.64px] mb-6 lg:mb-4"
          >
            A looong overdue <br className="hidden md:block" />
            revolution in screenwriting
          </h1>
          <p className="text-center z-10 -tracking-[0.2px] text-[#F7F5F8] inter max-w-[520px] mx-auto text-xl font-normal">
            Write better screenplays and be discovered by top producers to bring
            them to life.
          </p>
          <div
            className={`max-w-[533px] flex mx-auto gap-[10px] px-4 mt-9 flex-col sm:flex-row sm:items-end`}
          >
            <div className="flex flex-col relative flex-1 gap-2">
              <label
                htmlFor="wait-list"
                className="font-medium leading-[22px] inter text-[17px] text-white"
              >
                Email
              </label>
              <input
                placeholder="Enter your email"
                onChange={handleChangeValueEmail}
                value={email}
                className="rounded-lg z-10 h-12 max-w-xs w-full px-2 border-none outline-none placeholder:font-normal placeholder:text-[#B7B7B7] placeholder:inter inter min-w-full block sm:min-w-[330px]"
                id="wait-list"
              />
              {error &&
                error.message === "Request failed with status code 409" && (
                  <span className="mr-auto sm:mt-2 text-[13px] sm:absolute sm:-bottom-6 text-success-300">
                    You’re already on the waitlist!
                  </span>
                )}
              {error &&
                error.message === "Request failed with status code 400" && (
                  <span className="mr-auto sm:mt-2 text-[13px] sm:absolute sm:-bottom-6 text-[#D32D2D]">
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
          <h3
            style={{ zIndex: 99999999 }}
            className="text-white text-opacity-100 bg-opacity-100 opacity-100 font- text-[32px] sm:text-4xl lg:text-[40px] mt-[136px] sm:mt-40 lg:mt-52 inter mb-8 text-center"
          >
            Reach Your Great Story
          </h3>
          <div className="py-7 mx-auto sm:py-8 lg:py-10 text-sm">
            <span className="bg-white/10 inter font-medium ml-10 xl:ml-0 rounded-full px-[14px] text-white py-[7px] leading-[28px] text-[13px]">
              Features
            </span>
            <div className="py-3 flex flex-wrap gap-10 sm:gap-14 md:gap-20 2xl:gap-24 justify-center xl:justify-between">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
                className="min-h-[440px] sm:min-h-[450px] rounded-3xl justify-start z-10 flex flex-col items-end p-10 max-w-[320px] w-full"
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
                  className="inter text-2xl leading-8 my-7 font-medium text-center mx-auto"
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
                className="min-h-[440px] sm:min-h-[450px] rounded-3xl justify-start z-10 flex flex-col items-end p-10 pb-8 max-w-[320px] w-full"
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
                  className="inter text-2xl leading-8 my-7 font-medium text-center mx-auto"
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
                className="min-h-[440px] sm:min-h-[450px] rounded-3xl justify-start flex flex-col items-end p-10 max-w-[320px] w-full"
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
                  className="inter text-2xl leading-8 my-7 font-medium text-center mx-auto"
                >
                  Market Place
                </h6>
                <p className="text-[#B4BCD0] inter font-medium max-w-[225px] text-center mx-auto text-[15px]">
                  A marketplace to sell your story to film producers who will
                  take it from page to screen
                </p>
              </div>
            </div>
          </div>
          <div className="py-28 pb-20 lg:pb-28 relative">
            <div className="w-full absolute bottom-0 md:-bottom-16 lg:-bottom-40 right-32 sm:bottom-0  left-0 sm:right-0 text-center min-w-[800px] mx-auto">
              <Image src={starsTwo} alt="stars" />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(139.68deg, #FFE08A 16.99%, #FFAF19 100.91%)",
                boxShadow: "0px 10px 400px 81px rgba(255,175,25,0.2)",
              }}
              className="py-5 mx-auto px-5 sm:px-10 rounded-3xl text-center"
            >
              <span className="bg-black/20 w-28 inter text-[13px] font-medium rounded-full px-2 leading-[28px] mx-auto block text-white">
                While You Wait
              </span>
              <h2
                style={{ fontFamily: "Space Grotesk" }}
                className="text-center -tracking-[0.64px] mt-8 sm:mt-12 font-bold text-5xl leading-[60px] lg:text-6xl  #1B1F23 mb-5 lg:mb-8"
              >
                Join our free Workshop
              </h2>
              <p className="text-center inter text-[#2E2E2E] max-w-[670px] mx-auto font-normal text-xl  -tracking-[0.2px] mb-8">
                Take your story from an idea to screenplay at the{" "}
                <br className="hidden xl:block" /> iDraft Screenwriting
                Workshop- an intense 8 weeks learning experience with industry
                mentors, masterclasses and practical lessons.
              </p>
              <div className="flex flex-col-reverse sm:flex-row gap-5 lg:gap-8 justify-center pb-14 lg:pb-20">
                <Link
                  href="https://blog.albantsho.com/idraft-2023-is-here/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="border-[3px] z-10 border-[#1B1F23] font-bold bg-transparent text-[#1B1F23] text-[17px] inter py-4 sm:min-w-[170px] leading-[22px] -tracking-[0.41px] px-8 rounded-lg"
                >
                  Learn More
                </Link>
                <Link
                  href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd-p3Eg4h00ok2RlKv778U6yBWirxbLLsGieN5FoRyiSZZ7Vw/viewform?usp=send_form"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-[#573195] text-[17px] font-bold inter text-white py-4 sm:min-w-[170px] px-8 rounded-lg -tracking-[0.41px] leading-[22px] z-10"
                >
                  Apply to Join
                </Link>
              </div>
            </div>
            <div className="text-center pt-40">
              <h4 className="text-[#F7F5F8] tracking-[0.2px] sm:max-w-full inter font-medium text-2xl">
                Join the revolution.
                <br className="sm:hidden" /> Join the waitlist
              </h4>
              <div className="max-w-[530px] px-4 sm:px-3 flex mx-auto gap-[10px] sm:gap-2 mt-14 flex-col sm:flex-row sm:items-end">
                <div className="flex z-10 relative flex-col flex-1 gap-2">
                  <label
                    htmlFor="wait-list2"
                    className="font-medium text-[17px] text-start leading-[22px] text-white inter"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    onChange={handleChangeValueEmail2}
                    value={email2}
                    className="rounded-lg h-12 placeholder:font-normal placeholder:text-[#B7B7B7] placeholder:inter inter max-w-xs w-full px-2 border-none outline-none min-w-full block sm:min-w-[330px]"
                    id="wait-list2"
                  />
                  {error2 &&
                    error2.message ===
                      "Request failed with status code 409" && (
                      <span className="mr-auto sm:absolute sm:-bottom-6 sm:mt-2 text-[13px] text-success-300">
                        You’re already on the waitlist!
                      </span>
                    )}
                  {error2 &&
                    error2.message ===
                      "Request failed with status code 400" && (
                      <span className="mr-auto sm:absolute sm:-bottom-6 text-start sm:mt-2 text-[13px] text-[#D32D2D]">
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
                  className="bg-[#573195] z-10 inter max-h-[50px] cursor-pointer text-white text-[17px] py-4 px-8 rounded-lg font-semibold"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          <footer className="flex flex-col-reverse sm:flex-row gap-10 justify-between  items-center lg:mb-6">
            <div>
              <p className="text-[#F7F5F8] inter">© Albantsho 2023</p>
            </div>
            <div className="flex gap-4 justify-between text-center items-center px-3 flex-1 w-full flex-wrap sm:justify-end sm:gap-6 lg:gap-8">
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
