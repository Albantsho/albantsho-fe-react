import { useEffect, useRef } from "react";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepsLines = ({ step, setStep }: IProps) => {
  const stepLinks = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    stepLinks.current[step - 1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [step]);
  return (
    <div className="overflow-scroll no-scrollbar max-w-full">
      <div className="mt-4 min-w-[570px] gap-2  md:justify-center mb-10 lg:mb-16  flex space-x-4">
        {Array.from(new Array(7)).map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setStep(i + 1);
            }}
            ref={(elm) => stepLinks.current.push(elm as HTMLDivElement)}
            className={`${
              step === i + 1 ? "bg-success-500" : "bg-[#D9D9D9]"
            }  h-1 flex-1 rounded-sm cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepsLines;
