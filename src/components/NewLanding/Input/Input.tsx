interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isSuccess?: boolean;
  helperText?: string;
  containerattributes?: React.HTMLAttributes<HTMLDivElement>;
}

export default function Input({
  helperText,
  isError,
  isSuccess,
  containerattributes,
  ...props
}: IProps) {
  return (
    <div
      {...containerattributes}
      className={`w-full ${containerattributes?.className || ""}`}
    >
      <input
        {...props}
        className={`rounded-[4px] outline-none border placeholder:font-medium placeholder:text-base font-medium p-4 w-full  bg-[#333333] ${
          isError
            ? "border-[#B72F4F] text-[#B72F4F] placeholder:text-[#B72F4F]"
            : isSuccess
            ? "border-[#70CD32] text-[#70CD32] placeholder:text-[#70CD32]"
            : "border-[#999999] text-[#999999] placeholder:text-[#999999]"
        } ${props.className || ""}`}
      />
      <span
        className={`${
          isError
            ? "text-[#B72F4F]"
            : isSuccess
            ? " text-[#70CD32]"
            : "text-[#999999]"
        } font-medium inline-block w-full text-start`}
      >
        {helperText}
      </span>
    </div>
  );
}
