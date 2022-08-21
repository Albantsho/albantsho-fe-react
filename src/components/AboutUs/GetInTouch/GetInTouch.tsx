import { IconButton, TextField, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="mt-24 mb-20 max-w-screen-md px-5 sm:px-10 mx-auto"
    >
      <Typography
        variant="h3"
        className="futura font-medium text-center leading-normal"
        color="primary.main"
        gutterBottom
      >
        Get In Touch
      </Typography>
      <form>
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-20 mb-8">
          <TextField label="Name" variant="standard" fullWidth />
          <TextField label="Email" variant="standard" fullWidth />
        </div>
        <CustomInput
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          placeholder="Write your message here"
        />
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-5">
          <Btn size="large" className="py-3">
            Send Message
          </Btn>
          <div className="flex gap-3 items-center self-center">
            <IconButton
              className="border border-solid border-primary-main"
              color="primary"
              href="https://www.facebook.com/albantsho"
              target="_blank"
            >
              <FaFacebookF />
            </IconButton>
            <IconButton
              className="border border-solid border-primary-main"
              color="primary"
              href="https://www.twitter.com/albantsho"
              target="_blank"
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              className="border border-solid border-primary-main"
              color="primary"
              href="https://www.instagram.com/albantsho/"
              target="_blank"
            >
              <FaInstagram />
            </IconButton>
          </div>
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
