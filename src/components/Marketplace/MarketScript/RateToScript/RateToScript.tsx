import { Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomRating from "@shared/CustomRating/CustomRating";
import useScriptsApi from "apis/Scripts.api";
import { useState } from "react";

interface IProps {
  id: string;
}

const RateToScript = ({ id }: IProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { giveRateToScript } = useScriptsApi();
  const [rateValue, setRateValue] = useState<number | null>(null);

  const handleRateScript = async (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    setRateValue(newValue);
    await giveRateToScript({ rate: `${newValue}`, scriptId: id });
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center px-6">
      <div className="py-8 px-5 sm:px-10   md:px-12  bg-primary-700 rounded-md flex flex-col justify-center items-center gap-5 mb-10 md:mb-20  ">
        <Typography
          color="white"
          variant="h6"
          className="text-center futura font-semibold"
        >
          How would you rate this script?
        </Typography>
        <div className="bg-primary-500/20 rounded-md p-2">
          <CustomRating
            size={matches ? "large" : "medium"}
            precision={1}
            value={rateValue}
            onChange={handleRateScript}
          />
        </div>
      </div>
    </div>
  );
};

export default RateToScript;
