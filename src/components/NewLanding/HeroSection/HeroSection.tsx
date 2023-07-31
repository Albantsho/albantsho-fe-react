import useContact from "apis/Contact.api";
import { useState } from "react";
import { useMutation } from "react-query";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import NameLogo from "../NameLogo/NameLogo";

export default function HeroSection() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { registerEmail } = useContact();
  const { mutateAsync, isSuccess, isLoading } = useMutation(
    () => registerEmail(inputValue),
    {}
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onClick() {
    setShowInput(true);
  }

  async function onMutate() {
    try {
      await mutateAsync();
    } catch (error: any) {
      if (error && error.message) {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <div className="bg-small-hero-section 2xl:bg-ultra-hero-section sm:bg-medium-hero-section lg:bg-large-hero-section bg-cover bg-center h-[1000px] text-center flex-col flex items-center justify-center relative">
      <h2 className="text-center bg-clip-text from-0% from-white to-[#FFFFFF00] to-100% text-transparent text-[clamp(36px,15vw,48px)] bg-gradient-to-b font-semibold">
        Introducing
      </h2>
      <h2 className="text-[clamp(20px,5vw,48px)] bg-clip-text from-0% from-white to-[#FFFFFF00] to-100% text-transparent text-center bg-gradient-to-b font-semibold">
        the future of storytelling
      </h2>
      <div className="flex gap-4 sm:gap-8 w-full py-8 px-4 flex-shrink-0 justify-center items-center pb-10 sm:pb-14">
        <Logo />
        <NameLogo />
      </div>
      <div className="flex gap-2 px-4 max-w-[720px] w-full justify-center">
        {showInput && (
          <Input
            onChange={onChange}
            value={inputValue}
            isError={!!errorMessage.length}
            isSuccess={isSuccess}
            helperText={
              isSuccess
                ? "We’ve added your mail for early access"
                : errorMessage.length &&
                  errorMessage === "Request failed with status code 409"
                ? "Your email has already been saved for early access."
                : errorMessage.length
                ? "That doesn't look right. Try again. "
                : ""
            }
            containerattributes={{ className: "max-w-xs" }}
            className="max-w-xs"
            placeholder="Enter Your email"
          />
        )}
        <div className=" text-center">
          {!showInput ? (
            <>
              <div className="fancy min-w-[240px] min-[400px]:min-w-[290px] w-full">
                <Button
                  className="bg-transparent absolute hover:bg-transparent inset-0 z-10"
                  onClick={onClick}
                >
                  Join Early Access
                </Button>
              </div>
              <span className="text-[#EAEAEA]  text-lg inline-block">
                1300+ people already joined!
              </span>
            </>
          ) : (
            <>
              <div className="fancy hidden sm:block min-w-[290px]">
                <Button
                  onClick={onMutate}
                  className="w-full min-w-[290px] hidden sm:block bg-transparent absolute hover:bg-transparent inset-0 z-10"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-md text-white"></span>
                  ) : (
                    "Join Early Access"
                  )}
                </Button>
              </div>
              <span className="text-[#EAEAEA] text-lg hidden sm:inline-block">
                1300+ people already joined!
              </span>
              <div className="fancy sm:hidden min-w-[94px]">
                <Button
                  disabled={isLoading}
                  onClick={onMutate}
                  className="sm:hidden max-w-[94px] bg-transparent hover:bg-transparent absolute inset-0 z-10"
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-md text-white"></span>
                  ) : (
                    "Join"
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
