import { Typography } from "@mui/material";
import FAQAccordion from "components/FAQs/FAQAccordion/FAQAccordion";
import Link from "next/link";

const FAQs = () => {
  return (
    <section
      id="faq"
      className="max-w-screen-lg px-5 sm:px-10 mx-auto mt-12 md:mt-28 pb-3 overflow-hidden"
    >
      <div data-aos="fade-left">
        <Typography
          variant="h4"
          color="primary.main"
          className="grotesk text-center"
          gutterBottom
        >
          FAQ’s
        </Typography>
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
        <FAQAccordion question="How do you plan to protect content from copyright infringement?">
          <Typography paragraph>
            Before listing a script on the storybase, a writer is expected to
            fill their story abstract and provide proof of ownership in the form
            of copyright or something equally substantial. We carefully vet
            producers who want to buy scripts by ensuring they have legally
            registered companies as well as other due diligence that falls under
            KYC (Know Your Customer).
          </Typography>
          <Typography paragraph>
            They (the producers) only have access to the script loglines and a
            little information on the story abstract; however, they must be
            subscribed in order to read the full story profile and place a bid.
            (A story profile includes Synopsis and 10% of the script pages).
          </Typography>
          <Typography paragraph>
            Apart from accepting a special non-disclosure upon payment. The
            platform keeps a record of producers who have accessed more
            information about your script that is open to the general public and
            these along with our carefully revised terms of use discourage abuse
            of the platform and theft.
          </Typography>
        </FAQAccordion>
      </div>
    </section>
  );
};

export default FAQs;
