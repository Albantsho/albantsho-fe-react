import { SvgIcon } from "@mui/material";
import StarIcon from "@assets/icons/star.svg";

interface IProps {
  isSmall?: string;
}

const Star = ({ isSmall }: IProps) => {
  return (
    <SvgIcon
      fontSize="large"
      sx={[
        isSmall
          ? {
              width: { xs: 70, sm: 85, md: 65 },
              height: { xs: 70, sm: 85, md: 65 },
            }
          : { width: { md: 100, lg: 200 }, height: { md: 100, lg: 200 } },
      ]}
      className="text-transparent"
      component={StarIcon}
      inheritViewBox
    />
  );
};

export default Star;
