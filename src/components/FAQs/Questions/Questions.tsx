import { Typography, Link } from "@mui/material";
import Image from "next/image";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import LandingImg from "./assets/landing.png";
import LandingSignInImg from "./assets/landing-signin.png";
import SinginSingupImg from "./assets/signin-signup.png";
import SignupImg from "./assets/signup.png";
import GetStartedBtnImg from "./assets/get-started-btn.png";
import EmailVerificationImg from "./assets/email-verification.png";
import VerifyEmailImg from "./assets/verify-email.png";
import VerifyBtnImg from "./assets/verify-btn.png";
import LandingVerifiedImg from "./assets/landing-verified.png";
import LandingProfileMenuImg from "./assets/landing-profile-menu.png";
import SigninImg from "./assets/signin.png";
import SigninBtnImg from "./assets/signin-btn.png";

const Questions = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 sm:px-10 space-y-2">
      <FAQAccordion question="What is Albantsho?">
        <Typography paragraph>
          Albantsho is a platform that enables screenwriters to put together
          (intellectually protected) screenplays and sells them to producers
          worldwide who can bring this content to life.
        </Typography>
        <Typography paragraph>
          Albantsho is an all-in-one screenwriting solution for screenwriters to
          write properly formatted scripts (iDraft) and provide content
          producers with a simple way to search, preview & acquire these scripts
          for production (Storybase).
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
          story finds the right producer is even more daunting. At Albantsho, we
          believe that stories can come from anywhere and we are particularly
          passionate about ensuring that those from Africa find the spotlight.
        </Typography>
      </FAQAccordion>
      <FAQAccordion question="How do I register complaints?">
        <Typography>
          Visit the contact page for direct complaints or visit our FAQs to
          learn more. You can also join our growing community of creative
          storytellers on slack{" "}
          <Link
            target="_blank"
            href="https://join.slack.com/t/albantsho/shared_invite/zt-r68kz7mp-Qw6QUpjAWjMstNr4CwovfA"
            className="font-bold"
          >
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
          access to utilize our resources and features. If you are experiencing
          any lag, be sure to visit this{" "}
          <Link target="_blank" href="https://fast.com/" className="font-bold">
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
            Verify your email address by following the link that will be sent to
            your email address after your registration.
          </li>
          <li>
            <Link href="#login-guide" className="font-bold">
              Log in to your account.
            </Link>
          </li>
        </ul>
        <div className="mb-10" id="register-guide">
          <Typography
            variant="h5"
            gutterBottom
            color="primary.main"
            className="leading-relaxed"
          >
            Registering A New Account
          </Typography>
          <Typography paragraph>
            <span className="font-bold">Step 1:</span> To create a new account
            on Albantsho and begin creating your stories visit{" "}
            <Link
              href="https://www.albantsho.com"
              target="_blank"
              className="font-bold"
            >
              https://www.albantsho.com
            </Link>
            .
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> You should see something
            similar to the image below… Do you like what you see?
          </Typography>
          <Image src={LandingImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 2:</span> Click the “Sign In”
            button on the top right.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the “Sign In” button… You’re welcome.
          </Typography>
          <Image src={LandingSignInImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 3:</span> Click the “Sign Up”
            button on the top right.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the “Sign Up” button… You’re welcome as always.
          </Typography>
          <Image src={SinginSingupImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 4:</span> Please fill in your
            details in the appropriate fields and click the “I accept the terms
            and conditions” checkbox and confirm it shows ✅… You’re welcome to
            read the terms and conditions. <del>No, seriously read it.</del>
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the checkbox… As always, you’re welcome.
          </Typography>
          <Image src={SignupImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 5:</span> Please click the “Get
            Started” button to begin creating your magic!
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the button…. It’s purple, it’s royalty… Just like you are.
          </Typography>
          <Image src={GetStartedBtnImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 6:</span> Please check your email
            inbox (and maybe spam) for a 6-digit code, you need it to verify
            your email… You’re almost done I assure you.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the email. You don’t have to thank me… But thank me all the
            same.
          </Typography>
          <Image src={EmailVerificationImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 7:</span> Please click on the first
            box and type in your six-digit verification code.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the first box.
          </Typography>
          <Image src={VerifyEmailImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 8:</span> Please click the “Verify
            Email” button and you’re done!... I think…. I’m kidding, you’re
            done.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the “Verify Email” button.
          </Typography>
          <Image src={VerifyBtnImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 9:</span> You’re all done now! To
            visit your dashboard or logout, please hover or click your mouse on
            the profile icon just above the green success notification.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the profile icon.
          </Typography>
          <Image src={LandingVerifiedImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 10:</span> The profile icon will
            present you with a dropdown where you can select “Dashboard” (to
            visit your user dashboard and begin working on your beautiful
            script) or “Logout” options from the menu.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the menu options.
          </Typography>
          <Image src={LandingProfileMenuImg} alt="" />
        </div>
        <div id="login-guide">
          <Typography
            variant="h5"
            gutterBottom
            color="primary.main"
            className="leading-relaxed"
          >
            Login To The Platform
          </Typography>
          <Typography paragraph>
            <span className="font-bold">Step 1:</span> To log in to your tool,
            your creative journey, and your work begins here. visit{" "}
            <Link
              href="https://www.albantsho.com"
              target="_blank"
              className="font-bold"
            >
              https://www.albantsho.com
            </Link>
            .
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> You should see something
            similar to the image below… Do you like what you see?
          </Typography>
          <Image src={LandingImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 2:</span> Click the “Sign In”
            button on the top right… I know what you’re thinking, but click the
            button, please? 🤗.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the “Sign In” button… You’re welcome 😎.
          </Typography>
          <Image src={LandingSignInImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 3:</span> Fill in your registered
            email address and password in the appropriate fields, you can choose
            to click the “Remember me” checkbox if you want your email and
            password to be pre-filled automatically.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> You should see something
            similar to the image below
          </Typography>
          <Image src={SigninImg} alt="" />
          <Typography paragraph className="mt-4">
            <span className="font-bold">Step 4:</span> Click the “Sign In”
            button and you’ll be ushered into a world of amazing benefits… If
            your password is correct.
          </Typography>
          <Typography gutterBottom>
            <span className="font-bold">Hint:</span> The image below should help
            you spot the “Sign In” button.
          </Typography>
          <Image src={SigninBtnImg} alt="" />
        </div>
      </FAQAccordion>
      <FAQAccordion question="How do you plan to protect content from copyright infringement?">
        <Typography paragraph>
          Before listing a script on the storybase, a writer is expected to fill
          their story abstract and provide proof of ownership in the form of
          copyright or something equally substantial. We carefully vet producers
          who want to buy scripts by ensuring they have legally registered
          companies as well as other due diligence that falls under KYC (Know
          Your Customer).
        </Typography>
        <Typography paragraph>
          They (the producers) only have access to the script loglines and a
          little information on the story abstract; however, they must be
          subscribed in order to read the full story profile and place a bid. (A
          story profile includes Synopsis and 10% of the script pages).
        </Typography>
        <Typography paragraph>
          Apart from accepting a special non-disclosure upon payment. The
          platform keeps a record of producers who have accessed more
          information about your script that is open to the general public and
          these along with our carefully revised terms of use discourage abuse
          of the platform and theft.
        </Typography>
      </FAQAccordion>
      <FAQAccordion question="What if a producer reads my Script and replicates my idea without buying?">
        <Typography paragraph>
          Producers only have access to your story abstract and the logline;
          they will not be able to access or read your script till they have
          registered their interest to bid for your script and have signed an
          NDA (Non-Disclosure Agreement).
        </Typography>
        <Typography paragraph>
          We are leveraging state-of-the-art (proprietary) technology in
          ensuring transparency in the process through which producers access
          your content while securing your script(s) against intellectual theft.
        </Typography>
      </FAQAccordion>
      <FAQAccordion question="Is this platform free?">
        <Typography>
          Subscription to premium access on Albantsho is free for the first 500
          writers and 100 producers. Premium access gives you access to listing
          your script on our storybase and our feedback community of
          professional script readers (for writers) or buying your next
          screenplay (for producers). However, writers can continue to write for
          free on our next-level scriptwriting software for as long as they
          want.
        </Typography>
      </FAQAccordion>
    </div>
  );
};

export default Questions;
