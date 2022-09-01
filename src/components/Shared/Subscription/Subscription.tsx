import { Icon, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ReviewedIcon from "./assets/reviewed.svg";
interface IProps {
  plans: string[];
  type?: string;
  title: string;
  description: string;
  button: string;
  changeColor: string;
  isShowIcon: boolean;
}

const Subscription = ({
  plans,
  title,
  description,
  button,
  changeColor,
  isShowIcon,
  type,
}: IProps) => {
  console.log(changeColor);

  return (
    <div className="bg-white shadow-md px-8 py-10 max-w-[390px] mx-auto rounded-lg">
      <Typography variant="h6" className={`${changeColor} futura leading-normal`}>
        {type}
      </Typography>
      <Typography
        variant="h3"
        className={`${changeColor} futura font-semibold leading-normal`}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="" className="font-medium mb-8">
        {description}
      </Typography>
      <div>
        {plans.map((plan) => {
          return (
            <div key={plan} className="flex mb-4 md:mb-5 items-center gap-3">
              {isShowIcon && (
                <Icon fontSize="large">
                  <ReviewedIcon />
                </Icon>
              )}
              <Typography
                variant="body1"
                className="font-medium text-[#484848]"
              >
                {plan}
              </Typography>
            </div>
          );
        })}
        <Btn size="large" className="mt-4 py-2 md:mt-5 w-full text-center">
          {button}
        </Btn>
      </div>
    </div>
  );
};

export default Subscription;
