import { Box, Typography } from "@mui/material";
import MentorInfo from "./MentorInfo/MentorInfo";

import drSam from "./assets/dr-sam.jpg";
import femi from "./assets/femi.jpg";
import funmi from "./assets/funmi.jpg";
import lauren from "./assets/lauren.jpg";
import yinka from "./assets/yinka.jpg";
import Stars from "./Stars/Stars";

const mentorInfo = [
  {
    id: 1,
    image: drSam,
    name: "DR SAMANTHA-ISAAC IWOWO",
    description:
      "Dr. Iwowo is a Senior Lecturer at Bournemouth University, Director, Researcher, and Screen-writer with over 50 published screenplays, including the award-winning Oloibiri (2015), which premiered at the Cannes film festival.",
  },
  {
    id: 2,
    image: femi,
    name: "FEMI ODUGBEMI",
    description:
      "Femi Odugbemi is an award-winning documentary filmmaker, screenwriter, and a voting member of the Oscars’ Academy award. He is the founder and executive producer at Zuri24 media, renowned for excellent TV shows.",
  },
  {
    id: 3,
    image: funmi,
    name: "YINKA OGUN",
    description:
      "Yinka Ogun is an award-winning screenwriter of the Netflix Original, Oloture, and creator of multiple award-winning TV shows.  He is the current president of the screenwriters’ guild of Nigeria.",
  },
  {
    id: 4,
    image: lauren,
    name: "FUNMI ODUSHOLA",
    description:
      "Funmi Odushola is a Market researcher, New producer developer, and route-to-market expert with a vast West African portfolio. In addition, she is a data collector that broadly impacts new market investments.",
  },
  {
    id: 5,
    image: yinka,
    name: "Lauren O'Connor",
    description:
      "Yinka Ogun is an award-winning screenwriter of the Netflix Original, Oloture, and creator of multiple award-winning TV shows.  He is the current president of the screenwriters’ guild of Nigeria.",
  },
];

const MentorInfoList = () => {
  return (
    <Box className="py-4 px-4 xl:px-32 bg-primary-700 relative">
      <Typography variant="h5" className="text-white text-center" gutterBottom>
        SPEAKERS/MENTORS
      </Typography>

      <div className="absolute top-[10%] xl:left-7 hidden xl:block " >
        <Stars  />
      </div>

      <div  className="absolute top-[25%] xl:right-24 hidden xl:block " >
        <Stars isSmall="isSmall"  />
      </div>

      <div className="absolute bottom-[20%] xl:right-7 hidden xl:block " >
        <Stars  />
      </div>

      <div  className="absolute bottom-[30%] xl:left-24 hidden xl:block " >
        <Stars isSmall="isSmall"  />
      </div>

      <div className="flex flex-col p-8 md:px-28 xl:px-48 bg-white rounded-2xl gap-10">
        {mentorInfo.map((mentor) => {
          return (
            <MentorInfo
              key={mentor.id}
              name={mentor.name}
              image={mentor.image}
              description={mentor.description}
            />
          );
        })}

        <Typography variant="h4" color="primary.700">
          AND MORE...
        </Typography>
      </div>
    </Box>
  );
};

export default MentorInfoList;
