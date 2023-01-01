import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";

import AccordionQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireAccordion/QuestionnaireAccordion";

import RatingQuestionnaire from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireRating/QuestionnaireRating";
import { useRef, useState } from "react";
import type { IReviewTypeA, IReviewTypeB } from "interfaces/reviews";
import Questionnaire from "components/Dashboard/Reviewer/Questionnaire/Questionnaire";

const QuestionnairePage = () => {
  const click = () => {
    ("");
  };
  return (
    <>
      <Head>
        <title>Albantsho || Questionnaire</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <Questionnaire />
    </>
  );
};

export default QuestionnairePage;
