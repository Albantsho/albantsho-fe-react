import LogoSvg from "./assets/Logo.svg";

export default function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`max-w-[43px] max-h-[46px] flex-1 sm:max-w-[83px] sm:max-h-[91px] ${
        props.className || ""
      }`}
    >
      <LogoSvg />
    </div>
  );
}
