import { Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import FAQAccordion from "components/FAQs/FAQAccordion/FAQAccordion";
import Link from "next/link";
import routes from "routes/routes";
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
      <div className="max-w-screen-lg mx-auto space-y-2 pt-5">
        <FAQAccordion question="What is Albantsho?">
          <Typography paragraph>
            Albantsho is a platform that enables screenwriters to put together
            (intellectually protected) screenplays and sells them to producers
            worldwide who can bring this content to life.
          </Typography>
          <Typography paragraph>
            Albantsho is an all-in-one screenwriting solution for screenwriters
            to write properly formatted scripts (iDraft) and provide content
            producers with a simple way to search, preview & acquire these
            scripts for production (Storybase).
          </Typography>
          <Typography>
            Albantsho is able to accomplish all the above and more by leveraging
            bleeding-edge technology in form of blockchain and other world-class
            tools to help writers create content, protect their work from theft,
            and help them connect with a wide range of producers.
          </Typography>
        </FAQAccordion>
        <FAQAccordion question="Why choose us?">
          <Typography>
            Writing a movie script is challenging enough, making sure that your
            story finds the right producer is even more daunting. At Albantsho,
            we believe that stories can come from anywhere and we are
            particularly passionate about ensuring that those from Africa find
            the spotlight.
          </Typography>
        </FAQAccordion>
        <FAQAccordion question="How do I register complaints?">
          <Typography>
            Visit the contact page for direct complaints or visit our FAQs to
            learn more. You can also join our growing community of creative
            storytellers on slack{" "}
            <Link href={routes.FAQs.url} className="font-bold">
              here
            </Link>
            .
          </Typography>
        </FAQAccordion>
        <FAQAccordion question="How do I get started?">
          <Typography gutterBottom>
            The Albantsho platform is supported by the following browsers:
          </Typography>
          <ul className="list-disc pl-5 mb-4">
            <li>Microsoft Edge V25 or newer</li>
            <li>Google Chrome V50 or newer</li>
            <li>Mozilla Firefox V26 or newer</li>
          </ul>
          <Typography paragraph>
            Albantsho is a cloud-based platform so you will require internet
            access to utilize our resources and features. If you are
            experiencing any lag, be sure to visit this{" "}
            <Link
              target="_blank"
              href="https://fast.com/"
              className="font-bold"
            >
              link
            </Link>{" "}
            to check your internet speed.
          </Typography>
          <Typography gutterBottom>
            You can begin enjoying the Albantsho platform by performing the
            following actions:
          </Typography>
          <ul className="list-disc pl-5 mb-10">
            <li>
              <Link href="#register-guide" className="font-bold">
                Register a new account.
              </Link>
            </li>
            <li>
              Verify your email address by following the link that will be sent
              to your email address after your registration.
            </li>
            <li>
              <Link href="#login-guide" className="font-bold">
                Log in to your account.
              </Link>
            </li>
          </ul>
        </FAQAccordion>
      </div>
    </div>
  );
};

export default Help;
