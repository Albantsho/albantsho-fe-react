import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Logo from "@shared/Logo/Logo";
import useContact from "apis/Contact.api";
import { IResData } from "interfaces/response";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useMutation } from "react-query";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import successHandler from "utils/success-handler";
import * as Yup from "yup";

const emailValidation = Yup.object({
  email: Yup.string().email().required().label("Email"),
});

const Footer = () => {
  const [email, setEmail] = useState("");
  const user = useUserStore((state) => state.user);
  const { registerEmail } = useContact();

  const { mutate: registerEmailMutation } = useMutation<
    IResData<object>,
    Error,
    string
  >((data) => registerEmail(data), {
    onSuccess: (data) => {
      successHandler(data.message);
      setEmail("");
    },
  });

  const handleChangeValueEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmail(e.target.value);

  const registerEmailFunc = async () => {
    try {
      await emailValidation.validate({ email });
      registerEmailMutation(email);
    } catch (e) {
      errorHandler(e);
    }
  };

  return (
    <footer className="bg-primary-main py-20 relative z-50">
      <div className="max-w-screen-xl mx-auto text-white px-5 sm:px-10">
        <div className="max-w-[400px] mx-auto">
          <Typography
            variant="h4"
            className="futura text-center leading-8 font-medium"
            gutterBottom
          >
            Join the Tribe, It still
            <br /> takes a village
          </Typography>
          <Typography gutterBottom className="text-center">
            Get the latest news, explainers, script reviews, story spotlights,
            and more, delivered freshly in your inbox.
          </Typography>
          <div className="flex gap-5 flex-wrap justify-center mt-5">
            <CustomInput
              value={email}
              onChange={handleChangeValueEmail}
              className="max-w-[260px] w-full"
              variant="outlined"
              placeholder="Email"
              sx={{
                borderRadius: 2.5,
                backgroundColor: "#fff",
              }}
              InputProps={{ classes: { input: "py-3.5" } }}
            />
            <LoadingButton
              onClick={registerEmailFunc}
              color="inherit"
              variant="outlined"
              size="large"
            >
              Subscribe
            </LoadingButton>
          </div>
        </div>
        <Box
          gridTemplateColumns={{ sm: "repeat(2, auto)", lg: "repeat(4, auto)" }}
          className="grid gap-10 mt-16 sm:mt-24 sm:justify-evenly lg:justify-between"
        >
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Logo className="text-white" />
            <Typography
              variant="caption"
              className="text-center sm:text-left leading-normal"
            >
              Copyright Albantsho {new Date().getFullYear()}. <br />
              All Rights reserved.
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Link legacyBehavior href={routes.FAQs.url}>
              <Button color="inherit" size="large" className="sm:justify-start">
                FAQs
              </Button>
            </Link>
            <Link legacyBehavior href={routes.privacyPolicy.url}>
              <Button color="inherit" size="large" className="sm:justify-start">
                Privacy Policy
              </Button>
            </Link>
            <Link legacyBehavior href={routes.termsAndCondition.url}>
              <Button color="inherit" size="large" className="sm:justify-start">
                Terms and Conditions
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link legacyBehavior href={`${routes.aboutUs.url}`}>
              <Button color="inherit" size="large" className="sm:justify-start">
                About Us
              </Button>
            </Link>
            {user.userType === "writer" && (
              <Link legacyBehavior href={routes.writerDashboard.url}>
                <Button
                  color="inherit"
                  size="large"
                  className="sm:justify-start"
                >
                  Script Writing
                </Button>
              </Link>
            )}

            <Link legacyBehavior href={`${routes.marketplace.url}`}>
              <Button color="inherit" size="large" className="sm:justify-start">
                Story Base
              </Button>
            </Link>
          </div>
          <div>
            <Typography
              variant="subtitle2"
              className="font-normal text-center"
              gutterBottom
            >
              Follow us on social media
            </Typography>
            <div className="flex justify-center flex-wrap gap-10">
              <IconButton
                color="inherit"
                href="https://www.facebook.com/albantsho"
                target="_blank"
              >
                <FaFacebookF />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.twitter.com/albantsho"
                target="_blank"
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/albantsho/"
                target="_blank"
              >
                <FaInstagram />
              </IconButton>
            </div>
          </div>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
