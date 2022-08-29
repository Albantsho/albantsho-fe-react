import { SvgIcon } from "@mui/material";
import StarIcon from "@assets/icons/star.svg";

interface IProps {
  isSmall?: string;
}

const Stars = ({ isSmall }: IProps) => {
  return (
    <SvgIcon
      fontSize="large"
      sx={[
        isSmall
          ? { width: 65, height: 65 }
          : { width: { xs: 88, md: 200 }, height: { xs: 88, md: 200 } },
      ]}
      className="text-transparent"
      component={StarIcon}
      inheritViewBox
    />
  );
};

export default Stars;
