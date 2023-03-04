import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import PDFFile from "@shared/PdfFile/PdfFile";
import useDraftApi from "apis/Draft.api";
import useReviewsApi from "apis/Reviews.api";
import { IReviewerTask } from "interfaces/reviews";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resDraft, setResDraft] = useState<any>();
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();

  useEffect(() => {
    async function getDraftFunc() {
      try {
        const res = await getOneDraft(selectedScript?._id as string);
        setResDraft(res);
      } catch (error) {
        ("");
      }
    }
    getDraftFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let valueForConvertPdf = "";
  if (resDraft && resDraft.data) {
    const htmlContent = new DOMParser().parseFromString(
      resDraft.data.draft,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    valueForConvertPdf = serializeWithoutDiv({ children: value }) as string;
  }

  const seeScript = async () => {
    const res = await getOneDraftAsPdf(selectedScript?._id as string);
    const blobUrl = window.URL.createObjectURL(new Blob([res]));
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", `${selectedScript?.title}.pdf`);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

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

  return (
    <Card
      data-aos="fade-left"
      elevation={0}
      className={` h-fit hidden lg:block shadow-primary pt-7 pb-3 flex-[0.7]  xl:flex-[0.55] max-w-2xl`}
      style={{ opacity: selectedScript ? "100%" : "0" }}
    >
      <CardActions className="px-5 py-0 space-x-3 lg:space-x-6">
        <Button disableElevation className="py-[10px] px-4" variant="contained">
          {selectedScript?.reviewPlan === "A"
            ? "Type A"
            : selectedScript?.reviewPlan === "B"
            ? "Type B"
            : ""}
        </Button>
        {resDraft && resDraft.data ? (
          <PDFDownloadLink
            document={
              <PDFFile
                scriptValue={valueForConvertPdf as string}
                basedOn={selectedScript?.basedOn as string}
                draftDate={selectedScript?.draftDate as string}
                names={selectedScript?.names as string}
                title={selectedScript?.title as string}
                writtenBy={selectedScript?.writtenBy as string}
              />
            }
            fileName={selectedScript?.title}
          >
            <Button
              className="py-[10px] px-4"
              variant="outlined"
              startIcon={<FiArrowUpRight />}
            >
              View script
            </Button>
          </PDFDownloadLink>
        ) : (
          <Button
            onClick={seeScript}
            className="py-[10px] px-4"
            variant="outlined"
            startIcon={<FiArrowUpRight />}
          >
            View script
          </Button>
        )}
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
            defaultValue={selectedScript?.review[0]?.rate || 0}
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
