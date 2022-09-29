import {
  Card,
  CardActions,
  CardContent,
  Icon,
  Typography,
  Divider,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ReviewedIcon from "@assets/icons/reviewed.svg";

const list1 = [
  "Plot",
  "Character(s)",
  "Genre tropes and Story structure",
  "Dialogue",
  "Story quality",
  "Comprehensive summary and actionable suggestions",
];

const list2 = [
  "Plot",
  "Character(s)",
  "Genre tropes and Story structure",
  "Dialogue",
  "Story quality",
  "World-building",
  "Script formatting & Editing",
  "Writer’s Voice",
  "Authenticity feedback",
  "Opening  and closing image",
  "Comprehensive summary and actionable suggestions",
];

const ListPlans = () => {
  return (
    <div className="mt-3 mb-16 lg:pb-8 w-full px-5 sm:px-10 xl:px-20">
      <Divider />
      <div className="mt-7 lg:mt-12  sm:px-0 justify-center items-center w-full flex flex-col md:flex-row lg:flex-col xl:flex-row  gap-y-3 md:gap-8 xl:gap-10">
        <Card
          data-aos="flip-left"
          data-aos-anchor-placement="top-bottom"
          elevation={7}
          sx={{
            maxWidth: { xs: 400 },
            width: "100%",
          }}
          className="shadow-secondary  px-5 self-center md:self-start lg:self-center xl:self-start py-10 h-fit mb-10"
        >
          <CardContent className="px-0 py-0">
            <Typography
              variant="h6"
              className="futura font-medium text-xl text-[#8873F3]"
            >
              Type A
            </Typography>
            <Typography
              variant="h3"
              className={`text-[#8873F3] futura font-semibold leading-normal`}
            >
              $100
            </Typography>
            <Typography variant="body1" className="font-medium mb-8 mt-2">
              This package gets you a complete review of the following:
            </Typography>

            {list1.map((plan) => {
              return (
                <div
                  key={plan}
                  className="flex mb-4 md:mb-5 items-start gap-1 w-full"
                >
                  <Icon className="flex-shrink-0" fontSize="medium">
                    <ReviewedIcon />
                  </Icon>
                  <Typography
                    variant="body1"
                    className="font-medium text-[#484848]"
                  >
                    {plan}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
          <CardActions className="mt-7">
            <Btn size="large" className="py-2 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
        <Card
          data-aos="flip-right"
          data-aos-anchor-placement="top-bottom"
          elevation={7}
          sx={{
            maxWidth: { xs: 400 },
            width: "100%",
          }}
          className="shadow-secondary px-4 sm:px-6 py-10  mb-10"
        >
          <CardContent className="px-0 py-0">
            <Typography
              variant="h6"
              className="futura font-medium text-xl text-[#FFAF19]"
            >
              Type A
            </Typography>
            <Typography
              variant="h3"
              className={`text-[#FFAF19] futura font-semibold leading-normal`}
            >
              $200
            </Typography>
            <Typography variant="body1" className="font-medium mb-8 mt-2">
              This package gets you a complete review of the following:
            </Typography>

            {list2.map((plan) => {
              return (
                <div
                  key={plan}
                  className="flex mb-4 md:mb-5 items-start gap-1 w-full"
                >
                  <Icon className="flex-shrink-0" fontSize="medium">
                    <ReviewedIcon />
                  </Icon>
                  <Typography
                    variant="body1"
                    className="font-medium text-[#484848]"
                  >
                    {plan}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
          <CardActions className="mt-7">
            <Btn size="large" className="py-2 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ListPlans;
