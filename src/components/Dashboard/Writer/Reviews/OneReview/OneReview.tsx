import { Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomRating from "@shared/CustomRating/CustomRating";
import Logo from "@shared/Logo/Logo";
import { IReviewInformation } from "pages/dashboard/writer/reviews/[id]";
import ReviewInformation from "./ReviewInformation/ReviewInformation";

interface IProps {
  reviewInformation: IReviewInformation;
}

const OneReview = ({ reviewInformation }: IProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="bg-white shadow-primary rounded-lg  py-10 lg:py-20 mb-2 lg:mb-10 flex flex-col items-start max-w-5xl mx-auto px-5">
      <div className="text-center self-center">
        <Logo className="mb-4" color="primary" />
        <Typography variant="body1">
          Entry Type: Type {reviewInformation.script.reviewPlan}
        </Typography>
        <Typography
          variant="h6"
          className="text-primary-700 futura font-medium leading-normal"
        >
          {reviewInformation.script.title}
        </Typography>
        <Typography
          variant="body1"
          className="text-neutral-800  font-medium leading-normal"
        >
          {reviewInformation.script.scriptFormat}|
          {reviewInformation.script.totalPages &&
            `${reviewInformation.script.totalPages} Page`}
        </Typography>
      </div>
      <div className="sm:px-10 mt-14">
        <ReviewInformation
          title="INTRODUCTION"
          review={reviewInformation.review.introduction}
        />
        <ReviewInformation
          title="Plot"
          review={reviewInformation.review.plot}
        />
        <ReviewInformation
          title="Character(s)"
          review={reviewInformation.review.character}
        />
        <ReviewInformation
          title="Genre tropes and Story structure"
          review={reviewInformation.review.genreAndStoryStructure}
        />
        <ReviewInformation
          title="Dialogue"
          review={reviewInformation.review.dialogue}
        />
        {reviewInformation.review.storyQuality && (
          <ReviewInformation
            title="Story quality"
            review={reviewInformation.review.storyQuality}
          />
        )}
        {reviewInformation.review.worldBuilding && (
          <ReviewInformation
            title="World-building"
            review={reviewInformation.review.worldBuilding}
          />
        )}
        {reviewInformation.review.scriptFormattingAndEditing && (
          <ReviewInformation
            title="Script formatting & Editing"
            review={reviewInformation.review.scriptFormattingAndEditing}
          />
        )}
        {reviewInformation.review.writerVoice && (
          <ReviewInformation
            title="Writer’s Voice"
            review={reviewInformation.review.writerVoice}
          />
        )}
        {reviewInformation.review.authenticityFeedback && (
          <ReviewInformation
            title="Authenticity feedback"
            review={reviewInformation.review.authenticityFeedback}
          />
        )}
        {reviewInformation.review.openingAndClosingImage && (
          <ReviewInformation
            title="Opening  and closing image"
            review={reviewInformation.review.openingAndClosingImage}
          />
        )}
        <ReviewInformation
          title="Suggestions"
          review={reviewInformation.review.suggestions}
        />

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
            defaultValue={reviewInformation.review.rate as number}
          />
          <Typography
            variant="h5"
            className="futura text-primary-700 font-medium leading-normal"
          >
            {reviewInformation.review.rate === 1
              ? "- IMPROVE!"
              : reviewInformation.review.rate === 2
              ? "- FAIR!"
              : reviewInformation.review.rate === 3
              ? "- GOOD!"
              : reviewInformation.review.rate === 4
              ? "- GREAT!"
              : "- UNICORN!"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OneReview;
