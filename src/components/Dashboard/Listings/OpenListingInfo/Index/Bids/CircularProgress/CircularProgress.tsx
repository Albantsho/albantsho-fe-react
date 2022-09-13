import Box from "@mui/material/Box";
import CircularProgress, {
  type CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

function CircularProgressFunction(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{ color: "#D9D9D9" }}
        thickness={2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={25}
        disableShrink
        sx={{
          color: "#03B76F",
          position: "absolute",
          left: 0,
        }}
        thickness={2}
        {...props}
      />
    </Box>
  );
}
interface IProps {
  isSmall?: boolean;
}

export default function CustomizedProgressBars({ isSmall }: IProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        display: "inline-block",
      }}
    >
      <CircularProgressFunction size={isSmall ? 89 : 169} value={24} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" className="font-semibold text-neutral-800">
          24
        </Typography>
      </Box>
    </Box>
  );
}
