import { Box, Typography } from "@mui/material";

const ElgibilityIDraft = () => {
  return (
    <div className="px-4 py-24 bg-[#181025] lg:px-44 justify-between gap-7 pt-16 pb-20">
      <Box className="md:w-3/4">
        <Typography variant="h5" className="font-semibold text-white pb-8">
          ELIGIBILITY
        </Typography>
        <Typography variant="subtitle1" className=" text-white">
          We are looking for promising beginner and intermediate writers that
          possess unique ideas and perspectives within a wide range of genres
          for feature film production. A writer is eligible to apply if such
          writer:
        </Typography>

        <ul className="flex flex-col gap-6 px-11 pt-10 pb-20">
          <li className="list-disc text-secondary-500">
            <Typography variant="subtitle1" className="text-white">
              Is based in Africa;
            </Typography>
          </li>
          <li className="list-disc text-secondary-500">
            <Typography variant="subtitle1" className="  text-white">
              Has 60 - 70% of their script based in Nigeria or can be localized
              for the area;
            </Typography>
          </li>
          <li className="list-disc text-secondary-500">
            <Typography variant="subtitle1" className="text-white ">
              Is the sole developer of the submitted idea and has all copyright
              and relevant intellectual property rights in the expression of
              such idea vested in such writer; and
            </Typography>
          </li>
          <li className="list-disc text-secondary-500">
            <Typography variant="subtitle1" className=" text-white">
              Is willing to sell the final draft of the work at the end of the
              workshop to partner film production companies/brands through
              Albantsho subject to relevant terms and conditions.
            </Typography>
          </li>
        </ul>

        <Box className="px-9 py-5 bg-error-500 rounded-lg">
          <Typography variant="caption" className="text-white">
            Notice: Please note that Albantsho does not accept short-forms,
            documentaries and other forms of the script at this time.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ElgibilityIDraft;
