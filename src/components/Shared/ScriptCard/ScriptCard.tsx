import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
  type CardProps,
} from "@mui/material";

interface IProps extends CardProps {
  title: string;
  desc: string;
  rate: number;
  genres: string[];
  image: string;
}

const ScriptCard = (props: IProps) => {
  const { title, desc, rate, genres, image, sx, ...cardProps } = props;

  return (
    <Card sx={{ borderRadius: 2, ...sx }} {...cardProps}>
      <CardMedia
        component="img"
        className="object-cover object-left min-h-[250px]"
        src={image}
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
