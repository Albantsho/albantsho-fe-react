import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import useReviewsApi from "apis/Reviews.api";
import { IReviewerTask } from "interfaces/reviews";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

interface IProps {
  selectedScriptId: string;
  reviewerTaskList: IReviewerTask[];
}

const ScriptCart = ({ selectedScriptId, reviewerTaskList }: IProps) => {
  const selectedScript = reviewerTaskList.find(
    (reviewerTask) => reviewerTask._id === selectedScriptId
  );
  const { createNewReview } = useReviewsApi();
  const { replace } = useRouter();

  const beginReviewToScript = (scriptId: string) => async () => {
    try {
      await createNewReview({ scriptId });
      replace(routes.reviewerDashboardQuestionnaire.dynamicUrl(scriptId));
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Card
      data-aos="fade-left"
      elevation={0}
      className="h-fit hidden lg:block shadow-primary pt-7 pb-3 flex-[0.7]  xl:flex-[0.55] max-w-2xl"
    >
      <CardActions className="px-5 py-0 space-x-3 lg:space-x-6">
        <Button disableElevation className="py-[10px] px-4" variant="contained">
          {selectedScript?.reviewPlan === "A"
            ? "Type A"
            : selectedScript?.reviewPlan === "B"
            ? "Type B"
            : ""}
        </Button>
        <Button
          className="py-[10px] px-4"
          variant="outlined"
          startIcon={<FiArrowUpRight />}
        >
          View script
        </Button>
      </CardActions>
      <Divider className="my-7" />
      <CardContent className="px-5 py-0 ">
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura  font-medium w-[120px] text-neutral-800"
          >
            Title:
          </Typography>
          <Typography
            variant="h6"
            className="futura flex-1 font-medium text-primary-700 leading-normal"
          >
            {selectedScript?.title}
          </Typography>
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Genre:
          </Typography>
          <Chip
            className="py-3 px-4 rounded-md"
            label={selectedScript?.primaryGenre}
          />
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Entry Date:
          </Typography>
          <Typography
            variant="h6"
            className="futura font-medium text-neutral-800"
          >
            {selectedScript?.createdAt &&
              new Date(selectedScript?.createdAt).toLocaleDateString()}
          </Typography>
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Rating:
          </Typography>
          <CustomRating
            name="half-rating"
            readOnly
            defaultValue={selectedScript?.rate}
            precision={0.5}
          />
        </div>
        {selectedScript?.review.length === 0 ? (
          <Btn
            onClick={beginReviewToScript(selectedScript?._id as string)}
            className="w-full py-3 rounded-lg"
          >
            Begin review
          </Btn>
        ) : selectedScript?.review[0].complete ? (
          <Btn color="success" className="w-full py-3 rounded-lg">
            Completed
          </Btn>
        ) : (
          <Link
            href={routes.reviewerDashboardQuestionnaire.dynamicUrl(
              selectedScript?._id as string
            )}
            passHref
          >
            <Btn className="w-full py-3 rounded-lg">Continue review</Btn>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptCart;
