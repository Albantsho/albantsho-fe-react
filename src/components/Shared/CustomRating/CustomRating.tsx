import Star from "@assets/icons/rate-star.svg";
import EmptyStar from "@assets/icons/rate-star-empty.svg";
import { Rating, type RatingProps, SvgIcon } from "@mui/material";

const CustomRating = (props: RatingProps) => {
  return (
    <Rating
      sx={{ "&.MuiRating-root": { gap: { xs: "4px", md: "6px" } } }}
      icon={<SvgIcon fontSize="inherit" component={Star} inheritViewBox />}
      emptyIcon={
        <SvgIcon fontSize="inherit" component={EmptyStar} inheritViewBox />
      }
      {...props}
    />
  );
};

export default CustomRating;
