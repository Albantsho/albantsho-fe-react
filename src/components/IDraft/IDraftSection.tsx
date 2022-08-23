import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";

import vector from "./assets/vector.png";

import drSam from "./assets/dr-sam.jpg";

const IDraftSection = () => {
  return (
    <main className="">
      <Box className="pt-16 px-4 pb-20">
        <Typography
          variant="h4"
          color="grey.900"
          className="leading-8 w-4/6 font-semibold"
        >
          WE ARE A PLATFORM ENABLING{" "}
          <span className="text-purple-700">AFRICAN STORIES</span> ONE SCRIPT AT
          A TIME
        </Typography>
        <div className="mt-12">
          <Btn>Apply now</Btn>
        </div>
      </Box>

      <Box className="pt-14 px-4 pb-14 flex flex-col bg-[#e5e5e5]">
        <div className="mx-auto mb-10">
          <Image src={vector} alt="tv-show" layout="fixed" />
        </div>
        <Box>
          <Typography
            variant="h5"
            color="grey.900"
            className="font-semibold leading-8 w-3/5 mb-6"
          >
            iDraft Screenwriting Workshop
          </Typography>
          <Typography
            variant="body2"
            color="grey.500"
            className="font-normal leading-8"
          >
            Albantsho presents an intensive 8-week screenwriting workshop where
            we walk you through the scripting stage of filmmaking from its
            ideation to filmable final drafts. This workshop is tailored for
            promising writers at beginners and intermediate levels and provides
            practical support to ensure screenplays are compelling, cathartic
            and entertaining.
            <br />
            <br />
            Our aim is to provide screenwriters with aid, education and
            refinement of their unique stories which is then immediately
            acquired by our partnering producers.
          </Typography>
        </Box>
      </Box>

      <Box className="py-[72px] flex flex-col items-center">
        <Typography
          variant="h5"
          color="grey.900"
          className="font-semibold pb-12"
        >
          BENEFITS
        </Typography>

        <Box className="flex flex-col">
          <Box className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <span className="block px-4 py-2 rounded-md shadow-lg text-purple-700 font-bold bg-white">
                1
              </span>
              <p>A HAT-TRICK CURRICULUM</p>
            </div>
            <div className="w-[2px] ml-4 h-6 rounded-md bg-primary-700"></div>
          </Box>
        </Box>
      </Box>

      <Box className="px-4 py-24 bg-[#181025]">
        <Typography variant="h5" className="font-semibold text-white pb-8">
          ELIGIBILITY
        </Typography>
        <Typography variant="caption" className="font-normal text-white">
          We are looking for promising beginner and intermediate writers that
          possess unique ideas and perspectives within a wide range of genres
          for feature film production. A writer is eligible to apply if such
          writer:
        </Typography>

        <Box className="px-9 py-5 bg-error-500 rounded-lg">
          <Typography variant="caption" className="text-white leading-5">
            Notice: Please note that Albantsho does not accept short-forms,
            documentaries and other forms of the script at this time.
          </Typography>
        </Box>
      </Box>

      <Box className="flex flex-col items-center py-16">
        <Box className="bg-purple-700 py-12 px-12 text-white flex flex-col items-center rounded-full">
          <span className="mb-3 text-2xl">DEADLINE</span>
          <Typography variant="body1" className="font-semibold text-center">
            15TH <br /> MARCH <br /> 2022
          </Typography>
        </Box>

        <Box
          className="flex flex-col gap-6 justify-center items-center w-full mt-6"
          sx={{
            backgroundImage: { drSam },
            objectFit: "contain",
          }}
        >
          <Typography variant="h5" className="font-semibold">
            APPLICATION IS FREE
          </Typography>
          <Btn size="large">Apply now</Btn>
        </Box>
      </Box>

      <Box className="flex flex-col items-center pt-12 pb-16">
        <Typography variant="h6" className="font-semibold">
          TERMS AND CONDITIONS APPLY
        </Typography>
        <Box>
          <Typography>SPONSORED BY</Typography>
        </Box>
      </Box>

      <Box className="py-4 px-12 bg-purple-700">
        <Typography
          variant="h5"
          className="text-white text-center"
          gutterBottom
        >
          SPEAKERS/MENTORS
        </Typography>

        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image="./assets/dr-sam.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography className="text-primary-700" variant="h5">
                DR SAMANTHA-ISAAC IWOWO
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                Dr. Iwowo is a Senior Lecturer at Bournemouth University,
                Director, Researcher, and Screenwriter with over 50 published
                screenplays, including the award-winning Oloibiri (2015), which
                premiered at the Cannes film festival.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </main>
  );
};

export default IDraftSection;
