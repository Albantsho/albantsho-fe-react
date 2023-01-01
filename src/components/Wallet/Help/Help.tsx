import { Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Questions from "components/FAQs/Questions/Questions";
import useHelp from "./useHelp";

const Help = () => {
  const { errors, handleSubmit, loading, onSubmit, register } = useHelp();

  return (
    <div className="bg-white rounded-md px-5 sm:px-6 md:px-10 py-9 lg:px-14 lg:py-14 flex-1 w-full">
      <Typography
        variant="h4"
        className="text-primary-700 futura font-medium leading-normal mb-2 md:mb-3"
      >
        Withdraw
      </Typography>
      <Typography variant="body1" className="text-neutral-800 max-w-lg">
        Your assets is safe with us and available to you whenever needed. Please
        make sure to fill in the correct details
      </Typography>
      <Divider className="my-5 md:mb-12" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-8 lg:mb-12">
          <label htmlFor="contact-us">
            <Typography
              variant="body1"
              className="futura font-medium text-neutral-800"
            >
              Contact Us
            </Typography>
          </label>
          <CustomInput
            error={Boolean(errors.message) || false}
            {...register("message", {
              required: {
                value: true,
                message: "message is a required field",
              },
              maxLength: {
                value: 300,
                message: "message must less than 300 character",
              },
              minLength: {
                value: 10,
                message: "message must more than 10 character",
              },
            })}
            sx={{
              maxWidth: "628px",
              "& .MuiFormHelperText-root": {
                mt: "8px",
                mx: 0,
                color: "red",
                fontSize: "16px",
              },
            }}
            helperText={errors.message?.message}
            multiline
            rows={3}
            fullWidth
            id="contact-us"
            variant="outlined"
            size="medium"
          />
        </div>
        <Btn type="submit" loading={loading} className="py-3 px-6">
          Send
        </Btn>
      </form>
      <Divider className="my-3 sm:my-5 lg:my-12" />
      <Typography
        variant="h4"
        className="text-primary-700 futura leading-normal font-medium md:mb-4"
      >
        FAQs
      </Typography>
      <div className="-mx-5 sm:-mx-10 lg:mr-auto xl:-ml-14">
        <Questions />
      </div>
    </div>
  );
};

export default Help;
