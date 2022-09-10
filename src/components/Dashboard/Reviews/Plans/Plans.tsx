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

const Plans = () => {
  return (
    <div className="mt-3 mb-16 w-fit mx-auto px-5 sm:px-10">
      <Divider />
      <div className="mt-8 sm:px-0 justify-center w-full flex flex-wrap  gap-y-3 md:gap-4 xl:gap-10">
        <Card
          elevation={7}
          sx={{
            maxWidth: { xs: 310 },
            minWidth: 160,
          }}
          className="shadow-md shadow-slate-300 px-2 sm:px-6 py-10 h-fit mb-10"
        >
          <CardContent className="px-0">
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
            <Typography
              variant="body1"
              color=""
              className="font-medium mb-8 mt-2"
            >
              This package gets you a complete review of the following:
            </Typography>
            <div>
              {list1.map((plan) => {
                return (
                  <div
                    key={plan}
                    className="flex mb-4 md:mb-5 items-start gap-3"
                  >
                    <Icon fontSize="large">
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
            </div>
          </CardContent>
          <CardActions>
            <Btn size="large" className="py-2 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
        <Card
          elevation={7}
          sx={{
            maxWidth: { xs: 310 },
            minWidth: 160,
          }}
          className="shadow-md shadow-slate-300 px-2 sm:px-6 py-10  mb-10"
        >
          <CardContent className="px-0">
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
            <div>
              {list2.map((plan) => {
                return (
                  <div
                    key={plan}
                    className="flex mb-4 md:mb-5 items-start gap-3"
                  >
                    <Icon fontSize="large">
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
            </div>
          </CardContent>
          <CardActions>
            <Btn size="large" className="py-2 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Plans;
