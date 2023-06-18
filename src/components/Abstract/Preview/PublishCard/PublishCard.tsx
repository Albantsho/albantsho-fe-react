import { LoadingButton } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import useScriptsApi from "apis/Scripts.api";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";

const PublishCard = () => {
  const { updateScript } = useScriptsApi();
  const { query, replace } = useRouter();
  const [loading, setLoading] = useState(false);

  async function publishScript() {
    try {
      setLoading(true);
      const res = await updateScript({}, query.id as string, "publish=true");
      toast.success(res.message);
      replace(routes.writerDashboard.url);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center px-6">
      <div className="py-10 px-5 sm:px-10 w-full max-w-[688px] md:px-14  bg-primary-700 rounded-2xl flex flex-col justify-start items-center gap-5 md:mt-16 mb-28 md:mb-60 min-h-[258px] ">
        <Typography
          color="white"
          variant="h4"
          className="text-center futura font-semibold"
        >
          Everything Great?
        </Typography>
        <div className="flex w-full gap-y-3 gap-x-6 items-center max-[500px]:justify-center justify-between max-[500px]:flex-wrap">
          <LoadingButton
            color="secondary"
            loading={loading}
            onClick={publishScript}
            className="py-2 text-primary-main w-full"
            variant="contained"
          >
            List on Marketplace
          </LoadingButton>
          <Link
            className="w-full"
            href={routes.abstract.url(query.id as string)}
          >
            <Button
              variant="outlined"
              className="bg-white w-full hover:bg-white py-2"
            >
              Go back to Edit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublishCard;
