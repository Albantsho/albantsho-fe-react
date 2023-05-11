import toast from "react-hot-toast";

// This function is a custom error handler which shows an error notification using 
// the imported toast library. It takes in a message as argument and returns nothing.
const customHandler = (message: string) => {
  // The toast.error method displays the error notification with the passed-in message 
  // along with additional styling such as border, padding, color and font family.
  // position sets the position of the notification on the screen.
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