import { Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import projectArchive from "./assets/project-archive.png";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
  },
];

interface IProps {
  setOpenArchive: Dispatch<SetStateAction<boolean>>;
}

const ListScriptsPage = ({ setOpenArchive }: IProps) => {
  const handleOpen = () => setOpenArchive(true);
  return (
    <div className="mt-4 bg-white rounded-md shadow-sm px-3 py-5">
      <div className="mb-5 flex">
        <Typography
          variant="body1"
          className="futura flex-grow text-primary-700 font-medium "
        >
          Script
        </Typography>
        <Typography
          variant="body1"
          className="futura hidden flex-grow md:block mx-auto text-primary-700 font-medium "
        >
          Script Type
        </Typography>
      </div>

      <Divider sx={{ marginBottom: 4 }} />
      <div className="flex flex-col md:px-12 gap-5 md:gap-10">
        {listScripts.map((script) => {
          return (
            <div key={script.id}>
              <div className="flex mb-7 flex-col sm:flex-row gap-2">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-md "
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <div className="md:max-w-[270px]">
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
                <div className="my-auto py-2 px-4 mr-auto lg:ml-7 hidden md:block bg-slate-100 rounded-sm  text-neutral-800">
                  <span>{script.type}</span>
                </div>
                <div className="lg:ml-auto w-full sm:w-auto my-auto">
                  <Button
                    onClick={handleOpen}
                    variant="text"
                    sx={{
                      paddingY: 1.5,
                      paddingX: 2,
                      border: "1px solid #7953B5",
                      borderRadius: 1.5,
                      width: "100%",
                    }}
                    className="sm:w-auto"
                  >
                    Unarchive
                  </Button>
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

export default ListScriptsPage;
