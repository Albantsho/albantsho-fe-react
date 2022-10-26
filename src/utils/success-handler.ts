import { toast } from "react-toastify";

const successHandler = (message: string) => {
  toast.success(message);
};

export default successHandler;
