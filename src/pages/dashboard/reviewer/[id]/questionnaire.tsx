import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";

import AccordionQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireAccordion/QuestionnaireAccordion";

import RatingQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireRating/QuestionnaireRating";
import { useState } from "react";
import type { IReviewTypeA, IReviewTypeB } from "interfaces/reviews";

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
    opening_and_closing_image: "",
  });

  const listQuestionnaireAccordionTypeA = [
    {
      title: "INTRODUCTION",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, introduction: value }),
    },
    {
      title: "Plot",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, plot: value }),
    },
    {
      title: "Character(s)",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, character: value }),
    },
    {
      title: "Genre tropes and Story structure",
      editorValue: (value: string) =>
        setReviewTypeAValues({
          ...reviewTypeAValues,
          genre_and_story_structure: value,
        }),
    },
    {
      title: "Dialogue",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, dialogue: value }),
    },
    {
      title: "Story quality",
      description:
        "how relevant is this story concept and what is unique or not about its approach to the ide",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, story_quality: value }),
    },
    {
      title: "Suggestions",
      description: "your final thoughts and suggestions",
      editorValue: (value: string) =>
        setReviewTypeAValues({ ...reviewTypeAValues, suggestions: value }),
    },
  ];

  const listQuestionnaireAccordionTypeB = [
    {
      title: "INTRODUCTION",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, introduction: value }),
    },
    {
      title: "Plot",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, plot: value }),
    },
    {
      title: "Character(s)",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, character: value }),
    },
    {
      title: "Genre tropes and Story structure",
      editorValue: (value: string) =>
        setReviewTypeBValues({
          ...reviewTypeBValues,
          genre_and_story_structure: value,
        }),
    },
    {
      title: "Dialogue",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, dialogue: value }),
    },
    {
      title: "Story quality",
      description:
        "how relevant is this story concept and what is unique or not about its approach to the ide",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, story_quality: value }),
    },
    {
      title: "World-building",
      description: "how authentic and real is the world-building",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, world_building: value }),
    },
    {
      title: "Script formatting & Editing",
      description:
        "how well are the scripting conventions creatively utilized? Reference scene or page numbers",
      editorValue: (value: string) =>
        setReviewTypeBValues({
          ...reviewTypeBValues,
          script_formatting: value,
        }),
    },
    {
      title: "Writer’s Voice",
      description: "What’s unique or not about  the writing style",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, writer_voice: value }),
    },
    {
      title: "Authenticity feedback",
      editorValue: (value: string) =>
        setReviewTypeBValues({
          ...reviewTypeBValues,
          authenticity_feedback: value,
        }),
    },
    {
      title: "Opening  and closing image",
      editorValue: (value: string) =>
        setReviewTypeBValues({
          ...reviewTypeBValues,
          opening_and_closing_image: value,
        }),
    },
    {
      title: "Suggestions",
      description: "your final thoughts and suggestions",
      editorValue: (value: string) =>
        setReviewTypeBValues({ ...reviewTypeBValues, suggestions: value }),
    },
  ];

  const completed = Object.values(reviewTypeAValues).every((value) => value);

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
          {listQuestionnaireAccordionTypeA.map((accordion) => (
            <AccordionQuestionnaire
              key={accordion.title}
              title={accordion.title}
              description={accordion.description}
              editorValue={accordion.editorValue}
            />
          ))}
          <RatingQuestionnaire
            countRate={countRate}
            setCountRate={setCountRate}
          />
          <Btn disabled={!completed} fullWidth className="mt-6 py-4 rounded-lg">
            COMPLETE REVIEW
          </Btn>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
