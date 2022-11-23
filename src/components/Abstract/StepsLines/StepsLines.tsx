import Link from "next/link";
import { useEffect, useRef } from "react";
import routes from "routes/routes";

interface IProps {
  step: number;
}

const StepsLines = ({ step }: IProps) => {
  const stepLinks = useRef<HTMLAnchorElement[]>([]);
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
          <Link
            key={i}
            href={`${routes.abstract.url}?step=${i + 1}`}
            ref={(elm) => stepLinks.current.push(elm as HTMLAnchorElement)}
            className={`${
              step === i + 1 ? "bg-success-500" : "bg-[#D9D9D9]"
            }  h-1 flex-1 rounded-sm cursor-pointer`}
          ></Link>
        ))}
      </div>
    </div>
  );
};

export default StepsLines;
