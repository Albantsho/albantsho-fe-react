import LogoSvg from "./assets/Albantsho.svg";

export default function NameLogo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`min-w-[100px] flex-1 min-h-[30px] max-w-[280px] max-h-[45px] sm:max-w-[546px] sm:max-h-[90px] ${
        props.className || ""
      }`}
    >
      <LogoSvg />
    </div>
  );
}
