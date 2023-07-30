interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`btn rounded-[4px] text-xl leading-none bg-[#8761C3] text-white border-none disabled:bg-[#8569b3] font-sans hover:bg-[#9368d8] duration-200 px-4 max-w-xs w-full py-3 font-medium h-14 capitalize ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
}
