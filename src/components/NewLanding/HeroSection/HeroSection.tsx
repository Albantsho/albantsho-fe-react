import useContact from "apis/Contact.api";
import { useState } from "react";
import { useMutation } from "react-query";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import NameLogo from "../NameLogo/NameLogo";

export default function HeroSection() {
  const [showInput, setShowInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { registerEmail } = useContact();
  const { mutateAsync, error, isSuccess, isError, isLoading } = useMutation(
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
      setErrorMessage("");
      await mutateAsync();
      setErrorMessage("");
    } catch (error: any) {
      if (error && error.message) {
        if (error.message !== "Request failed with status code 409") {
          setErrorMessage(error.message);
        }else {
          setErrorMessage("409");
        }
      }
    }
  }

  return (
    <div className="bg-small-hero-section 2xl:bg-ultra-hero-section sm:bg-medium-hero-section lg:bg-large-hero-section bg-cover bg-center max-[400px]:h-[758px] max-[767px]:h-[828px] h-[1000px] text-center flex-col flex items-center justify-center relative">
      <h2 className="text-center bg-clip-text from-0% from-white to-[#FFFFFF00] to-100% text-transparent text-[clamp(36px,15vw,48px)] bg-gradient-to-b font-semibold">
        Introducing
      </h2>
      <h2 className="text-[clamp(28px,5vw,48px)] bg-clip-text from-0% from-white to-[#FFFFFF00] to-100% text-transparent text-center bg-gradient-to-b font-semibold">
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
            isError={(!!errorMessage.length) && errorMessage!=="409"}
            isSuccess={isSuccess || (isError && errorMessage==="409")}
            helperText={
              isSuccess
                ? "We’ve added your mail for early access"
                : (isError && errorMessage==="409")
                ? "This email address is already on the waitlist"
                : errorMessage.length
                ? "That doesn't look right. Try again."
                : ""
            }
            containerattributes={{ className: "max-w-xs" }}
            className="max-w-xs"
            placeholder="stanleykubrick@mail.com"
          />
        )}
        <div
          className={`text-center sm:max-w-xs sm:w-full ${
            !showInput ? "w-full" : ""
          }`}
        >
          {!showInput ? (
            <>
              <div className="fancy max-w-xs mx-auto w-full flex-1">
                <Button
                  className="bg-transparent absolute hover:bg-transparent inset-0 z-10 flex-1 max-w-xs"
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
              <div className="fancy hidden sm:block max-w-xs min-w-[290px]">
                <Button
                  onClick={onMutate}
                  className="w-full min-w-[290px] hidden max-w-xs sm:block bg-transparent absolute hover:bg-transparent inset-0 z-10"
                >
                  Join Early Access
                </Button>
              </div>
              <span className="text-[#EAEAEA] text-lg hidden sm:inline-block">
                1300+ people already joined!
              </span>
              <div className="fancy sm:hidden min-w-[94px] max-w-[94px]">
                <Button
                  onClick={onMutate}
                  className="sm:hidden min-w-[94px] max-w-[94px] bg-transparent hover:bg-transparent absolute inset-0 z-10"
                >
                  Join
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
