import toast from "react-hot-toast";

const customHandler = ({
  icon,
  message,
}: {
  message: string;
  icon: string;
}) => {
  toast.success(message, {
    style: {
      border: "1px solid #7953B5",
      padding: "16px",
      color: "#7953B5",
    },
    iconTheme: {
      primary: "#7953B5",
      secondary: "#BCA9DA",
    },
    position: "top-right",
    icon,
  });
  return;
};

export default customHandler;
