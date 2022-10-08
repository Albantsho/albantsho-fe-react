import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AccordionQuestionnaire = dynamic(
  () =>
    import(
      "components/Reviewer/Questionnaire/QuestionnaireAccordion/QuestionnaireAccordion"
    )
);
const RatingQuestionnaire = dynamic(
  () =>
    import(
      "components/Reviewer/Questionnaire/QuestionnaireRating/QuestionnaireRating"
    )
);

const listQuestionnaireAccordion = [
  { title: "INTRODUCTION" },
  { title: "Plot" },
  { title: "Character(s)" },
  { title: "Genre tropes and Story structure" },
  { title: "Dialogue" },
  {
    title: "Story quality",
    description:
      "how relevant is this story concept and what is unique or not about its approach to the ide",
  },
  {
    title: "Suggestions",
    description: "your final thoughts and suggestions",
  },
];

const Questionnaire = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Questionnaire </title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <div className="py-6 md:py-6 lg:py-8 gap-6 bg-[#f6f8fc] px-5 sm:px-10 space-y-6 overflow-hidden">
        <div
          data-aos="flip-left"
          data-aos-duration="200"
          className="bg-white shadow-primary rounded-lg py-6 sm:py-10 lg:py-20 text-center max-w-5xl mx-auto px-5"
        >
          <Logo className="mb-4" color="primary" />
          <Typography variant="body1">Entry Type: Type A</Typography>
          <Typography
            variant="body1"
            className="mb-8 lg:mb-16"
          >{`Start date: {{dd/mm/yyyy/}}`}</Typography>

          <Typography
            variant="h4"
            className="text-neutral-800 futura font-medium leading-normal"
          >
            SAMPLE SCRIPT
          </Typography>

          <Typography
            variant="h6"
            className="text-primary-700 futura font-medium leading-normal"
          >
            The Long Man of Long Beach
          </Typography>
          <Typography
            variant="body1"
            className="text-neutral-800  font-medium leading-normal"
          >
            Feature film | 100 pages
          </Typography>
        </div>

        <div className="rounded-lg text-center max-w-5xl mx-auto space-y-6">
          <Suspense fallback={null}>
            {listQuestionnaireAccordion.map((accordionTitle) => (
              <AccordionQuestionnaire
                key={accordionTitle.title}
                title={accordionTitle.title}
                description={accordionTitle.description}
              />
            ))}
            <RatingQuestionnaire />
          </Suspense>
          <Btn fullWidth className="mt-6 py-4 rounded-lg">
            COMPLETE REVIEW
          </Btn>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
