import toast from "react-hot-toast";

const customHandler = (message: string) => {
  toast.error(message, {
    style: {
      border: "1px solid #D32D2D",
      padding: "16px",
      color: "#D32D2D",
      fontFamily: "Montserrat",
    },
    iconTheme: {
      primary: "#D32D2D",
      secondary: "#FFEDED",
    },
    position: "top-right",
  });
  return;
};

export default customHandler;
