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

const list = [
  "Plot",
  "Character(s)",
  "Genre tropes and Story structure",
  "Dialogue",
  "Story quality",
];

const ListReviewsPlans = () => {
  return (
    <div className="w-full mt-3 min-h-screen pb-10">
      <Divider />
      <div className="mt-8 sm:pl-11 pl:0 sm:px-0 flex flex-wrap gap-y-3 md:gap-4">
        <Card
          sx={{
            maxWidth: { xs: 295, md: 400 },
          }}
          className="shadow-md shadow-slate-300 px-2 sm:px-8 py-10 mx-auto  mb-10 lg:mb-28"
        >
          <CardContent>
            <Typography
              variant="body1"
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
              {list.map((plan) => {
                return (
                  <div
                    key={plan}
                    className="flex mb-4 md:mb-5 items-center gap-3"
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
            <Btn size="large" className="mt-4 py-2 md:mt-5 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: { xs: 295, md: 423 }, minWidth: 160 }}
          className="shadow-md shadow-slate-300 px-2 sm:px-8 py-10 mx-auto  mb-10 lg:mb-28"
        >
          <CardContent>
            <Typography
              variant="body1"
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
            <Typography
              variant="body1"
              color=""
              className="font-medium mb-8 mt-2"
            >
              This package gets you a complete review of the following:
            </Typography>
            <div>
              {list.map((plan) => {
                return (
                  <div
                    key={plan}
                    className="flex mb-4 md:mb-5 items-center gap-3"
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
            <Btn size="large" className="mt-4 py-2 md:mt-5 w-full text-center">
              Proceed to pay
            </Btn>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ListReviewsPlans;
