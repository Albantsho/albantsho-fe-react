import { Box, Button, IconButton, Typography } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-main py-20 relative z-50">
      <div className="max-w-screen-2xl mx-auto text-white px-5 sm:px-10">
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
          {/* <div className="flex gap-5 flex-wrap justify-center mt-5">
            <CustomInput
              className="max-w-[260px] w-full"
              variant="outlined"
              placeholder="Email"
              sx={{
                borderRadius: 2.5,
                backgroundColor: "#fff",
              }}
              InputProps={{ classes: { input: "py-3.5" } }}
            />
            <Button color="inherit" variant="outlined" size="large">
              Subscribe
            </Button>
          </div> */}
        </div>
        <Box
          gridTemplateColumns={{ sm: "repeat(2, auto)", lg: "repeat(4, auto)" }}
          className="grid gap-10 mt-16 sm:mt-24 sm:justify-evenly lg:justify-between"
        >
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Logo />
            <Typography
              variant="caption"
              className="text-center sm:text-left leading-normal"
            >
              Copyright Albantsho {new Date().getFullYear()}. <br />
              All Rights reserved.
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Link passHref href="/FAQs">
              <Button color="inherit" size="large" className="sm:justify-start">
                FAQs
              </Button>
            </Link>
            <Link passHref href="/privacy-policy">
              <Button color="inherit" size="large" className="sm:justify-start">
                Privacy Policy
              </Button>
            </Link>
            <Link passHref href="/terms-and-conditions">
              <Button color="inherit" size="large" className="sm:justify-start">
                Terms and Conditions
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link passHref href="/about-us">
              <Button color="inherit" size="large" className="sm:justify-start">
                About Us
              </Button>
            </Link>
            <Link href="/script-writing" passHref>
              <Button color="inherit" size="large" className="sm:justify-start">
                Script Writing
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button color="inherit" size="large" className="sm:justify-start">
                Marketplace
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
