import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

const benefitsList = [
  { number: 1, description: "A HAT-TRICK CURRICULUM" },
  { number: 2, description: "GREAT NETWORKING" },
  {
    number: 3,
    description: "GAIN EARLY ACCESS TO OUR PIONEER ALBANTSHO PLATFORM",
  },
  {
    number: 4,
    description:
      "POSITION YOUR FINAL SCRIPT FOR POTENTIAL IMMEDIATE ACQUISITION BY TOP PRODUCTION BRANDS UPON CONCLUDING THE WORKSHOP.",
  },
];

const BenefitsIDeaft = () => {
  return (
    <div className="py-16 sm:px-6 px-2 lg:py-32 mb-10">
      <Typography
        variant="h4"
        className="font-semibold text-center mb-6 lg:mb-16"
        color="grey.900"
      >
        BENEFITS
      </Typography>

      <div className="flex lg:items-center lg:justify-center">
        <Timeline className="md:max-w-md lg:ml-80  py-4 ">
          {benefitsList.map((item, index) => {
            return (
              <TimelineItem className="h-28 before:hidden" key={item.number}>
                <TimelineSeparator>
                  <TimelineOppositeContent
                    color="primary.700"
                    className="hanson font-bold py-2 px-5 text-2xl bg-white flex justify-center items-center shadow-lg rounded-md w-12 max-h-12"
                  >
                    {item.number}
                  </TimelineOppositeContent>
                  {index < benefitsList.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: "primary.700",
                        borderRadius: 1,
                        transform: "translateY(8px)",
                        marginBottom: 2,
                      }}
                      className={` w-[2px]`}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent className="font-semibold" color="grey.900">
                  {item.description}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default BenefitsIDeaft;
