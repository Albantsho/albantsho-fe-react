import { Typography } from "@mui/material";
import { IBidForScript } from "interfaces/bid";

interface IProps {
  bid: IBidForScript;
}

const hourSeconds = 3600;
const daySeconds = 86400;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderTime = (dimension: string, time: number) => {
  return (
    <div className="flex justify-center items-center">
      <Typography variant="h6" className="text-black">
        {time}
        {dimension}
      </Typography>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;

export default function CustomizedProgressBars({ bid: _bid }: IProps) {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("md"));
  // const startTime = new Date(bid.updatedAt).getTime() / 1000; // use UNIX timestamp in seconds
  // const endTime =
  //   new Date(bid.expire_date ? bid.expire_date : 0).getTime() +
  //   new Date(bid.updatedAt).getTime(); // use UNIX timestamp in seconds

  // const remainingTime = endTime - startTime;

  return;
  // <CountdownCircleTimer
  //   isPlaying
  //   strokeWidth={6}
  //   size={matches ? 150 : 80}
  //   colors="#03B76F"
  //   duration={daySeconds}
  //   initialRemainingTime={remainingTime % daySeconds}
  //   onComplete={(totalElapsedTime) => ({
  //     shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
  //   })}
  // >
  //   {({ elapsedTime, color }) => (
  //     <span style={{ color }}>
  //       {renderTime("h", getTimeHours(daySeconds - elapsedTime))}
  //     </span>
  //   )}
  // </CountdownCircleTimer>;
}
