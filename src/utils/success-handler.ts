import toast from "react-hot-toast";

const customHandler = (message: string) => {
  toast.success(message, {
    style: {
      border: "1px solid #03B76F",
      padding: "16px",
      color: "#03B76F",
    },
    iconTheme: {
      primary: "#03B76F",
      secondary: "#E5FCF2",
    },
    position: "top-right",
  });
  return;
};

export default customHandler;
