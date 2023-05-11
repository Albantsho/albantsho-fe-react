import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import { IReviewValuesTypeA } from "interfaces/reviews";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Suspense, useState } from "react";
import routes from "utils/routes";
import DescriptionComponent from "./DescriptionComponent/DescriptionComponent";

const SuccessReviewModal = dynamic(
  () => import("../../Modals/SuccessReviewModal/SuccessReviewModal")
);
const SendReviewModal = dynamic(
  () => import("../../Modals/SendReviewModal/SendReviewModal")
);

interface IProps {
  reviewValuesTypeA: IReviewValuesTypeA;
}

const DescriptionTypeA = ({ reviewValuesTypeA }: IProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [openSendReview, setOpenSendReview] = useState(false);
  const [openSuccessReview, setOpenSuccessReview] = useState(false);
  const { query } = useRouter();

  const listTitles = [
    { title: "INTRODUCTION", value: reviewValuesTypeA.introduction },
    { title: "Plot", value: reviewValuesTypeA.plot },
    { title: "Character(s)", value: reviewValuesTypeA.character },
    {
      title: "Genre tropes and Story structure",
      value: reviewValuesTypeA.genreAndStoryStructure,
    },
    { title: "Dialogue", value: reviewValuesTypeA.dialogue },
    {
      title: "Story quality",
      description:
        "(how relevant is this story concept and what is unique or not about its approach to the ide)",
      value: reviewValuesTypeA.storyQuality,
    },
    {
      title: "Suggestions",
      description: "(your final thoughts and suggestions)",
      value: reviewValuesTypeA.suggestions,
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
            defaultValue={reviewValuesTypeA.rate as number}
          />
          <Typography
            variant="h5"
            className="futura text-primary-700 font-medium leading-normal"
          >
            {reviewValuesTypeA.rate === 1
              ? "- IMPROVE!"
              : reviewValuesTypeA.rate === 2
              ? "- FAIR!"
              : reviewValuesTypeA.rate === 3
              ? "- GOOD!"
              : reviewValuesTypeA.rate === 4
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
            href={routes.reviewerDashboardQuestionnaireTypeA.dynamicUrl(
              query.id as string
            )}
          >
            <Btn
              sx={{ "&.MuiButtonBase-root": { border: "1px solid #7953B5" } }}
              className="py-3 px-3  min-w-[170px] flex-1 bg-white text-primary-700 border "
            >
              EDIT REVIEW
            </Btn>
          </Link>
        </div>
      </div>
      <Suspense fallback={null}>
        {openSendReview ? (
          <SendReviewModal
            reviewId={reviewValuesTypeA._id}
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

export default DescriptionTypeA;
