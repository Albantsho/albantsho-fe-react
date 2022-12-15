import { IconButton, TextField, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import useGetInTouch from "./useGetInTouch";

const GetInTouch = () => {
  const { errors, handleSubmit, loading, onSubmit, register } = useGetInTouch();

  return (
    <section id="get-in-touch" className="mt-24 mb-20 max-w-screen-md mx-auto">
      <Typography
        variant="h3"
        className="futura font-medium text-center leading-normal"
        color="primary.main"
        gutterBottom
      >
        Get In Touch
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-20 mb-8">
          <TextField
            error={Boolean(errors.name) || false}
            {...register("name")}
            label="Name"
            variant="standard"
            fullWidth
            sx={{
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.name?.message}
          />
          <TextField
            error={Boolean(errors.email) || false}
            {...register("email")}
            label="Email"
            variant="standard"
            fullWidth
            sx={{
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.email?.message}
          />
        </div>
        <CustomInput
          error={Boolean(errors.message) || false}
          {...register("message")}
          sx={{
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.message?.message}
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          placeholder="Write your message here"
        />
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-5">
          <Btn type="submit" loading={loading} size="large" className="py-3">
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
