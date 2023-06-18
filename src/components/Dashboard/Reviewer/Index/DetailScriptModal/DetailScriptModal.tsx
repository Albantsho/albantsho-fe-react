import {
  Button,
  Chip,
  Divider,
  Grow,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Btn from "@shared/Btn/Btn";
import PDFFile from "@shared/PdfFile/PdfFile";
import useDraftApi from "apis/Draft.api";
import useReviewsApi from "apis/Reviews.api";
import axios from "axios";
import { IReviewerTask } from "interfaces/reviews";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
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

  const { replace } = useRouter();
  const { createNewReview } = useReviewsApi();
  const { getOneDraft, getOneDraftAsPdf } = useDraftApi();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resDraft, setResDraft] = useState<any>();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let valueForConvertPdf = "";
  if (resDraft) {
    const htmlContent = new DOMParser().parseFromString(
      resDraft.draft,
      "text/html"
    );
    const value = deserializeScriptWithOutDiv(htmlContent.body);
    valueForConvertPdf = serializeWithoutDiv({ children: value }) as string;
  }

  const seeScript = async () => {
    const res = await getOneDraftAsPdf(reviewerTask._id as string);

    const blobUrl = window.URL.createObjectURL(new Blob([res]));
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", `${reviewerTask.title}.pdf`);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const beginReviewToScript = (scriptId: string) => async () => {
    try {
      await createNewReview({ scriptId });
      reviewerTask.reviewPlan === "A"
        ? replace(
            routes.reviewerDashboardQuestionnaireTypeA.url(scriptId)
          )
        : replace(
            routes.reviewerDashboardQuestionnaireTypeB.url(scriptId)
          );
    } catch (error) {
      errorHandler(error);
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
            {resDraft ? (
              <PDFDownloadLink
                document={
                  <PDFFile
                    scriptValue={valueForConvertPdf as string}
                    names={reviewerTask.names}
                    basedOn={reviewerTask.basedOn}
                    draftDate={reviewerTask.draftDate}
                    title={reviewerTask.title}
                    writtenBy={reviewerTask.writtenBy}
                  />
                }
                fileName={reviewerTask.title}
              >
                <Button
                  className="py-2 px-4"
                  variant="outlined"
                  startIcon={<FiArrowUpRight />}
                >
                  View script
                </Button>
              </PDFDownloadLink>
            ) : (
              <Button
                onClick={seeScript}
                className="py-2 px-4"
                variant="outlined"
                startIcon={<FiArrowUpRight />}
              >
                View script
              </Button>
            )}
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
                    ? routes.reviewerDashboardPreviewTypeA.url(
                        reviewerTask._id
                      )
                    : routes.reviewerDashboardPreviewTypeA.url(
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
                    ? routes.reviewerDashboardQuestionnaireTypeA.url(
                        reviewerTask._id
                      )
                    : routes.reviewerDashboardQuestionnaireTypeB.url(
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
