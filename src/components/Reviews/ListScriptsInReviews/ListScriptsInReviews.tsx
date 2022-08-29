import { Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import projectArchive from "./assets/project-archive.png";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "reviewd",
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "noReviewd",
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "reviewd",
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",

    status: "noReviewd",
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",

    status: "reviewd",
  },
];

const ListScriptsInReviews = () => {
  return (
    <div className="mt-4 bg-white rounded-md md:px-12 shadow-sm px-3 py-5">
      <div className="mb-5 flex">
        <Typography
          variant="body1"
          className="futura w-1/2 text-primary-700 font-medium "
        >
          Script
        </Typography>
        <Typography
          variant="body1"
          className="futura w-1/2 ml-auto sm:mr-auto text-primary-700 font-medium "
        >
          Status
        </Typography>
      </div>

      <Divider sx={{ marginBottom: 4 }} />
      <div className="flex flex-col  gap-5 md:gap-10">
        {listScripts.map((script) => {
          return (
            <div key={script.id}>
              <div className="flex mb-7 flex-col sm:flex-row md:items-center ">
                <div className="flex flex-col sm:w-1/2 gap-3 mb-3 sm:flex-row">
                  <div className="flex md:gap-5 gap-2 mr-2">
                    <div className=" flex-shrink-0 relative">
                      <Image
                        className="rounded-md w-full h-full"
                        loading="lazy"
                        src={script.image}
                        alt={script.title}
                      />
                    </div>
                    <div className="md:max-w-[256px]">
                      <Typography
                        variant="body1"
                        className="futura font-semibold text-primary-700"
                      >
                        {script.title}
                      </Typography>
                      <Typography variant="caption" className="text-stone-800">
                        {script.description}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col sm:flex-row items-center sm:w-1/2 gap-2">
                  <div
                    className={`${
                      script.status === "reviewd"
                        ? "text-success-500 bg-success-300/20"
                        : "text-warning-500 bg-warning-300/20"
                    } my-auto py-2 px-4  rounded-sm text-center w-full sm:w-auto`}
                  >
                    <span>{script.status}</span>
                  </div>
                  {script.status === "reviewd" && (
                    <div className="my-auto md:ml-auto w-full md:w-auto sm:ml-auto">
                      <Button
                        variant="text"
                        sx={{
                          paddingY: 1.5,
                          paddingX: 2,
                          border: "1px solid #7953B5",
                          borderRadius: 1.5,
                          width: "100%",
                        }}
                      >
                        See review
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <Divider className="hidden md:flex" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListScriptsInReviews;
