import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";

import AccordionQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireAccordion/QuestionnaireAccordion";

import RatingQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireRating/QuestionnaireRating";
import { useState } from "react";
import type { IReviewTypeA, IReviewTypeB } from "interfaces/reviews";

const listQuestionnaireAccordionTypeA = [
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
const listQuestionnaireAccordionTypeB = [
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
    title: "World-building",
    description: "how authentic and real is the world-building",
  },
  {
    title: "Script formatting & Editing",
    description:
      "how well are the scripting conventions creatively utilized? Reference scene or page numbers",
  },
  {
    title: "Writer’s Voice",
    description: "What’s unique or not about  the writing style",
  },
  { title: "Authenticity feedback" },
  { title: "Opening  and closing image" },
  {
    title: "Suggestions",
    description: "your final thoughts and suggestions",
  },
];

const Questionnaire = () => {
  const [countRate, setCountRate] = useState<number | null>(2);
  const [reviewTypeAValues, setReviewTypeAValues] = useState<IReviewTypeA>({
    introduction: "",
    plot: "",
    character: "",
    genre_and_story_structure: "",
    dialogue: "",
    story_quality: "",
    suggestions: "",
  });
  const [reviewTypeBValues, setReviewTypeBValues] = useState<IReviewTypeB>({
    introduction: "",
    plot: "",
    character: "",
    genre_and_story_structure: "",
    dialogue: "",
    story_quality: "",
    world_building: "",
    script_formatting: "",
    writer_voice: "",
    authenticity_feedback: "",
    suggestions: "",
  });

  return (
    <>
      <Head>
        <title>Albantsho || Questionnaire</title>
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
          {listQuestionnaireAccordionTypeA.map((accordionTitle) => (
            <AccordionQuestionnaire
              key={accordionTitle.title}
              title={accordionTitle.title}
              description={accordionTitle.description}
            />
          ))}
          <RatingQuestionnaire
            countRate={countRate}
            setCountRate={setCountRate}
          />
          <Btn fullWidth className="mt-6 py-4 rounded-lg">
            COMPLETE REVIEW
          </Btn>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
