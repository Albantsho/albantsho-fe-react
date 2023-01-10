import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import { IReviewTypeB } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import QuestionnaireAccordion from "./QuestionnaireAccordion/QuestionnaireAccordion";
import QuestionnaireRating from "./QuestionnaireRating/QuestionnaireRating";
import useQuestionnaire from "./useQuestionnaire";

interface IProps {
  reviewValues: IReviewTypeB;
  script: IScriptReviewer;
}

const Questionnaire = ({ reviewValues, script }: IProps) => {
  const {
    completed,
    countRate,
    listQuestionnaireAccordionTypeA,
    listQuestionnaireAccordionTypeB,
    setCountRate,
  } = useQuestionnaire();

  return (
    <div className="py-6 md:py-6 lg:py-8 gap-6 bg-[#f6f8fc] px-5 sm:px-10 space-y-6 overflow-hidden">
      <div
        data-aos="flip-left"
        data-aos-duration="200"
        className="bg-white shadow-primary rounded-lg py-6 sm:py-10 lg:py-20 text-center max-w-5xl mx-auto px-5"
      >
        <Logo className="mb-4" color="primary" />
        <Typography variant="body1">
          Entry Type: Type {script.reviewPlan}
        </Typography>
        <Typography
          variant="body1"
          className="mb-8 lg:mb-16"
        >{`Start date: {{${new Date()}}}`}</Typography>

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
          <QuestionnaireAccordion
            key={accordion.title}
            title={accordion.title}
            description={accordion.description}
            editorValue={accordion.editorValue}
            saveValue={accordion.saveValue}
          />
        ))}
        <QuestionnaireRating
          countRate={countRate}
          setCountRate={setCountRate}
        />
        <Btn disabled={!completed} fullWidth className="mt-6 py-4 rounded-lg">
          COMPLETE REVIEW
        </Btn>
      </div>
    </div>
  );
};

export default Questionnaire;
