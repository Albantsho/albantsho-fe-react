import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import { IReviewValuesTypeB } from "interfaces/reviews";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import routes from "utils/routes";
import DescriptionComponent from "../DescriptionTypeA/DescriptionComponent/DescriptionComponent";

const SuccessReviewModal = dynamic(
  () => import("../../Modals/SuccessReviewModal/SuccessReviewModal")
);
const SendReviewModal = dynamic(
  () => import("../../Modals/SendReviewModal/SendReviewModal")
);

interface IProps {
  reviewValuesTypeB: IReviewValuesTypeB;
}

const DescriptionTypeB = ({ reviewValuesTypeB }: IProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [openSendReview, setOpenSendReview] = useState(false);
  const [openSuccessReview, setOpenSuccessReview] = useState(false);
  const { query } = useRouter();

  const listTitles = [
    { title: "INTRODUCTION", value: reviewValuesTypeB.introduction },
    { title: "Plot", value: reviewValuesTypeB.plot },
    { title: "Character(s)", value: reviewValuesTypeB.character },
    {
      title: "Genre tropes and Story structure",
      value: reviewValuesTypeB.genreAndStoryStructure,
    },
    { title: "Dialogue", value: reviewValuesTypeB.dialogue },
    {
      title: "Story quality",
      description:
        "(how relevant is this story concept and what is unique or not about its approach to the ide)",
      value: reviewValuesTypeB.storyQuality,
    },
    {
      title: "World-building",
      description: "(how authentic and real is the world-building)",
      value: reviewValuesTypeB.worldBuilding,
    },
    {
      title: "Script formatting & Editing",
      description:
        "(how well are the scripting conventions creatively utilized? Reference scene or page numbers)",
      value: reviewValuesTypeB.scriptFormattingAndEditing,
    },
    {
      title: "Writer’s Voice",
      description: "(What’s unique or not about  the writing style)",
      value: reviewValuesTypeB.writerVoice,
    },
    {
      title: "Authenticity feedback",
      value: reviewValuesTypeB.authenticityFeedback,
    },
    {
      title: "Opening  and closing image",
      value: reviewValuesTypeB.openingAndClosingImage,
    },
    {
      title: "Suggestions",
      description: "(your final thoughts and suggestions)",
      value: reviewValuesTypeB.suggestions,
    },
  ];

  return (
    <>
      <div className="sm:px-10  lg:px-44 mt-14">
        {listTitles.map((desc) => (
          <DescriptionComponent key={desc.title} desc={desc} />
        ))}
        <Typography
          variant="h4"
          className="futura text-primary-700 font-medium leading-normal mt-10"
        >
          RATING
        </Typography>

        <div className="mt-4 sm:mt-10 gap-3 flex flex-wrap">
          <CustomRating
            size={matches ? "large" : "small"}
            readOnly
            defaultValue={reviewValuesTypeB.rate as number}
          />
          <Typography
            variant="h5"
            className="futura text-primary-700 font-medium leading-normal"
          >
            {reviewValuesTypeB.rate === 1
              ? "- IMPROVE!"
              : reviewValuesTypeB.rate === 2
              ? "- FAIR!"
              : reviewValuesTypeB.rate === 3
              ? "- GOOD!"
              : reviewValuesTypeB.rate === 4
              ? "- GREAT!"
              : "- UNICORN!"}
          </Typography>
        </div>

        <div className="mt-16 mb-16  flex flex-wrap justify-start w-full gap-y-3 gap-x-8 ">
          <Btn
            onClick={() => setOpenSendReview(true)}
            className="py-3 px-3  min-w-[170px] flex-1 "
          >
            SEND Review AS EMAIL
          </Btn>
          <Link
            passHref
            legacyBehavior
            href={routes.reviewerDashboardQuestionnaireTypeB.url(
              query.id as string
            )}
          >
            <Btn
              sx={{ "&.MuiButtonBase-root": { border: "1px solid #7953B5" } }}
              className="py-3 px-3  min-w-[170px] flex-1 bg-white text-primary-700 border"
            >
              EDIT REVIEW
            </Btn>
          </Link>
        </div>
      </div>
      <Suspense fallback={null}>
        {openSendReview ? (
          <SendReviewModal
            reviewId={reviewValuesTypeB._id}
            openSendReview={openSendReview}
            setOpenSendReview={setOpenSendReview}
            setOpenSuccessReview={setOpenSuccessReview}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openSuccessReview ? (
          <SuccessReviewModal
            openSuccessReview={openSuccessReview}
            setOpenSuccessReview={setOpenSuccessReview}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default DescriptionTypeB;
