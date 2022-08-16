import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Icon,
  Rating,
  Typography,
  type CardProps,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ReviewedIcon from "./assets/reviewed.svg";

interface IScript {
  title: string;
  desc: string;
  rate: number;
  genres: string[];
  image: string;
  reviewed?: boolean;
  price?: number;
}

interface IProps extends CardProps {
  script: IScript;
}

const ScriptCard = (props: IProps) => {
  const { script, sx, ...cardProps } = props;

  return (
    <Card sx={{ borderRadius: 2, ...sx }} {...cardProps}>
      <CardMedia
        component="img"
        className="object-cover object-left min-h-[250px]"
        src={script.image}
      />
      <CardContent className="py-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {script.genres.map((genre, i) => (
            <Chip key={i} label={genre} sx={{ borderRadius: 1 }} />
          ))}
        </div>
        <div className="flex justify-between">
          <Typography variant="h5" color="primary.main" className="grotesk">
            {script.title}
          </Typography>
          {script.reviewed && (
            <Icon fontSize="large">
              <ReviewedIcon />
            </Icon>
          )}
        </div>
        <Typography>{script.desc}</Typography>
        {script.price && (
          <Chip
            className="rounded"
            label={
              <>
                <span className="text-neutral-300">Price:</span>
                <span className="text-primary-main text-lg font-semibold">
                  {" "}
                  ${script.price}
                </span>
              </>
            }
          />
        )}
      </CardContent>
      <CardActions className="px-4 justify-between pb-6 pt-0">
        {script.price && <Btn size="large">Place Bid</Btn>}
        <Rating readOnly defaultValue={script.rate} />
      </CardActions>
    </Card>
  );
};

export default ScriptCard;
