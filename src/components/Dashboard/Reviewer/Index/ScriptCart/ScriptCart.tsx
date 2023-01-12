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
import useDraftApi from "apis/Draft.api";
import useReviewsApi from "apis/Reviews.api";
import { IReviewerTask } from "interfaces/reviews";
import jsPDF from "jspdf";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";
import routes from "routes/routes";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import errorHandler from "utils/error-handler";
import { serializeWithoutDiv } from "utils/serialize-slate";

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
  const { getOneDraft } = useDraftApi();
  const beginReviewToScript = (scriptId: string) => async () => {
    try {
      await createNewReview({ scriptId });
      selectedScript?.reviewPlan === "A"
        ? replace(
            routes.reviewerDashboardQuestionnaireTypeA.dynamicUrl(scriptId)
          )
        : replace(
            routes.reviewerDashboardQuestionnaireTypeB.dynamicUrl(scriptId)
          );
    } catch (error) {
      errorHandler(error);
    }
  };

  const seeScript = async () => {
    const resDraft = await getOneDraft(selectedScript?._id as string);
    const htmlContent = new DOMParser().parseFromString(
      resDraft.data.draft,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    console.log({ children: value });

    const valueForConvertPdf = serializeWithoutDiv({ children: value });
    const doc = new jsPDF("p", "pt", "a4");
    if (valueForConvertPdf) {
      doc.html(
        `<div style="padding:0 40px;width:595px;height:842px;font-family:Courier Prime;display:flex;justify-content:center;align-items:center;gap:18px;flex-direction:column;"><h6 style="font-family:Courier Prime;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
          selectedScript?.title
        }</h6><h6 style="font-family:Courier Prime;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">Writers<br/>${selectedScript?.writtenBy.join(
          " "
        )}</h6><h6 style="font-family:Courier Prime;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">${new Date(
          selectedScript?.draftDate as string
        ).toLocaleDateString()}</h6></div><div style="padding:0 40px;width:595px;font-family:Courier Prime;">
        ${valueForConvertPdf}
        </div>`,
        {
          margin: [30, 0],
          autoPaging: "text",
          callback: (pdf) => {
            for (let i = 0; i < doc.internal.pages.length; i++) {
              doc.setPage(i);
              doc.text(i <= 1 ? " " : `Page ${String(i - 1)}`, 275, 830);
            }
            pdf.save(selectedScript?.title);
          },
        }
      );
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
          onClick={seeScript}
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
        ) : selectedScript?.review[0].completed ? (
          <Link
            href={
              selectedScript?.reviewPlan === "A"
                ? routes.reviewerDashboardPreviewTypeA.dynamicUrl(
                    selectedScript?._id as string
                  )
                : routes.reviewerDashboardPreviewTypeB.dynamicUrl(
                    selectedScript?._id as string
                  )
            }
            passHref
            legacyBehavior
          >
            <Button
              color="success"
              variant="contained"
              className="w-full text-white py-3 rounded-lg"
            >
              Completed
            </Button>
          </Link>
        ) : (
          <Link
            href={
              selectedScript?.reviewPlan === "A"
                ? routes.reviewerDashboardQuestionnaireTypeA.dynamicUrl(
                    selectedScript?._id as string
                  )
                : routes.reviewerDashboardQuestionnaireTypeB.dynamicUrl(
                    selectedScript?._id as string
                  )
            }
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
