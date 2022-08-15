import {
  Card,
  CardContent,
  CardMedia,
  type CardProps,
  Chip,
  Rating,
  Typography,
  CardActions,
} from "@mui/material";
import JulieImage from "assets/images/julie.png";

interface IProps extends CardProps {
  title: string;
  desc: string;
  rate: number;
  genres: string[];
}

const ScriptCard = (props: IProps) => {
  const { title, desc, rate, genres, sx, ...cardProps } = props;

  return (
    <Card sx={{ borderRadius: 2, ...sx }} {...cardProps}>
      <CardMedia
        component="img"
        className="object-cover object-left-bottom min-h-[250px]"
        src={JulieImage.src}
      />
      <CardContent className="py-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, i) => (
            <Chip key={i} label={genre} sx={{ borderRadius: 1 }} />
          ))}
        </div>
        <Typography
          variant="h5"
          color="primary.main"
          fontFamily="Space Grotesk"
        >
          {title}
        </Typography>
        <Typography>{desc}</Typography>
        <Rating readOnly defaultValue={rate} />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default ScriptCard;
