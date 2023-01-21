import {
  Button,
  Chip,
  Divider,
  Grow,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import useDraftApi from "apis/Draft.api";
import useReviewsApi from "apis/Reviews.api";
import { IReviewerTask } from "interfaces/reviews";
import jsPDF from "jspdf";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import routes from "routes/routes";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import errorHandler from "utils/error-handler";
import { serializeWithoutDiv } from "utils/serialize-slate";

interface IProps {
  openDetailScript: boolean;
  setOpenDetailScript: React.Dispatch<React.SetStateAction<boolean>>;
  reviewerTask: IReviewerTask;
}

const DetailScriptModal = ({
  openDetailScript,
  setOpenDetailScript,
  reviewerTask,
}: IProps) => {
  const handleCloseUnArchive = () => {
    setOpenDetailScript(false);
  };
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();
  const { replace } = useRouter();
  const { createNewReview } = useReviewsApi();
  const [resDraft, setResDraft] = useState<any>();

  const beginReviewToScript = (scriptId: string) => async () => {
    try {
      await createNewReview({ scriptId });
      reviewerTask.reviewPlan === "A"
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

  useEffect(() => {
    async function getDraftFunc() {
      try {
        const res = await getOneDraft(reviewerTask._id as string);
        setResDraft(res);
      } catch (error) {
        ("");
      }
    }
    getDraftFunc();
  }, []);

  const seeScript = async () => {
    if (resDraft.data) {
      const htmlContent = new DOMParser().parseFromString(
        resDraft.data.draft,
        "text/html"
      );
      const value = deserializeScriptWithOutDiv(htmlContent.body);
      const valueForConvertPdf = serializeWithoutDiv({ children: value });
      const doc = new jsPDF("p", "pt", "a4");
      if (valueForConvertPdf) {
        doc.html(
          `<div style="padding:0 40px;width:595px;height:842px;font-family:Courier;display:flex;align-items:center;gap:25px;flex-direction:column;padding:0 20px;padding-top:80px;"><h6 style="font-family:Courier;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
            reviewerTask.title
          }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">Writers<br/>${
            reviewerTask.writtenBy.length !== 0 &&
            reviewerTask.writtenBy.join(" ")
          }</h6><h6 style="font-family:Courier;font-size:20px;word-spacing:0px;font-weight:light;text-align:center;">${
            reviewerTask.basedOn
          }</h6><h6 style="font-family:Courier;font-size:18px;word-spacing:0px;font-weight:light;text-align:center;">${new Date(
            reviewerTask.draftDate
              ? (reviewerTask.draftDate as string)
              : Date.now()
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
              pdf.save(reviewerTask.title);
            },
          }
        );
      }
    } else {
      const res = await getOneDraftAsPdf(reviewerTask._id as string);
      const blobUrl = window.URL.createObjectURL(new Blob([res]));
      const aTag = document.createElement("a");
      aTag.href = blobUrl;
      aTag.setAttribute("download", `${reviewerTask.title}.pdf`);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      disableAutoFocus={true}
      open={openDetailScript}
      onClose={handleCloseUnArchive}
    >
      <Grow in={openDetailScript} mountOnEnter unmountOnExit>
        <div className="bg-white  w-full mt-12 max-w-lg mx-auto py-8 rounded-lg">
          <div className="pb-8 px-5 sm:px-7 flex gap-3 items-stretch">
            <Button disableElevation className="py-2 px-4" variant="contained">
              {reviewerTask?.reviewPlan === "A"
                ? "Type A"
                : reviewerTask?.reviewPlan === "B"
                ? "Type B"
                : ""}
            </Button>
            <Button
              onClick={seeScript}
              className="py-2 px-4"
              variant="outlined"
              startIcon={<FiArrowUpRight />}
            >
              View script
            </Button>
          </div>
          <Divider />
          <div className="pt-8 px-5 sm:px-7">
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
                {reviewerTask.title}
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Genre:
              </Typography>
              <Chip
                className="py-3 px-4 rounded-md"
                label={reviewerTask.primaryGenre}
              />
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Entry Date:
              </Typography>
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                {new Date(reviewerTask.createdAt).toLocaleDateString()}
              </Typography>
            </div>
            <div className="flex items-center mb-8">
              <Typography
                variant="h6"
                className="futura  font-medium w-[120px] text-neutral-800"
              >
                Rating:
              </Typography>
              <Rating
                readOnly
                defaultValue={reviewerTask.review[0]?.rate || 0}
              />
            </div>
            {reviewerTask.review.length === 0 ? (
              <Btn
                onClick={beginReviewToScript(reviewerTask._id)}
                className="w-full py-3"
              >
                Begin review
              </Btn>
            ) : reviewerTask.review[0].completed ? (
              <Link
                href={
                  reviewerTask.reviewPlan === "A"
                    ? routes.reviewerDashboardPreviewTypeA.dynamicUrl(
                        reviewerTask._id
                      )
                    : routes.reviewerDashboardPreviewTypeA.dynamicUrl(
                        reviewerTask._id
                      )
                }
                passHref
                legacyBehavior
              >
                <Button
                  color="success"
                  variant="contained"
                  className="w-full text-white py-3"
                >
                  Completed
                </Button>
              </Link>
            ) : (
              <Link
                href={
                  reviewerTask.reviewPlan === "A"
                    ? routes.reviewerDashboardQuestionnaireTypeA.dynamicUrl(
                        reviewerTask._id
                      )
                    : routes.reviewerDashboardQuestionnaireTypeB.dynamicUrl(
                        reviewerTask._id
                      )
                }
                passHref
              >
                <Btn className="w-full py-3">Continue review</Btn>
              </Link>
            )}
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default DetailScriptModal;
