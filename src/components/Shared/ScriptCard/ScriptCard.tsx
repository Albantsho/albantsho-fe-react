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
import Link from "next/link";
import routes from "routes/routes";
import ReviewedIcon from "./assets/reviewed.svg";

interface IScript {
  title: string;
  desc: string;
  rate: number;
  genres: string[];
  image: string;
  reviewed?: boolean;
  price?: number;
  productId: string;
}

interface IProps extends CardProps {
  script: IScript;
}

const ScriptCard = (props: IProps) => {
  const { script, sx, ...cardProps } = props;

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0px 2px 7px rgba(117, 88, 162, 0.15)",
        ...sx,
      }}
      {...cardProps}
    >
      <Link href={routes.marketplaceOneScript(script.productId)} passHref>
        <a>
          <CardMedia
            component="img"
            className="object-cover object-left w-full max-h-[250px]"
            src={script.image}
            loading="lazy"
          />
        </a>
      </Link>

      <CardContent className="py-6">
        <div className="flex flex-wrap gap-2">
          {script.genres.map((genre, i) => (
            <Chip key={i} label={genre} sx={{ borderRadius: 1 }} />
          ))}
        </div>
        <Rating
          readOnly
          defaultValue={script.rate}
          className="sm:hidden mt-4"
        />
        <div className="flex justify-between mt-1 sm:mt-4 mb-2 gap-2">
          <Typography
            variant="h4"
            color="primary.main"
            className="futura font-normal leading-tight"
          >
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
            className="rounded mt-6"
            label={
              <>
                <span className="text-neutral-300">Price:</span>
                <span className="text-primary-main text-lg font-semibold">
                  ${script.price}
                </span>
              </>
            }
          />
        )}
      </CardContent>
      <CardActions className="px-4 justify-between pb-6 pt-0 gap-3">
        {script.price && (
          <Btn size="large" className="rounded-">
            Place Bid
          </Btn>
        )}
        <Rating
          readOnly
          defaultValue={script.rate}
          className="hidden sm:inline-flex"
        />
      </CardActions>
    </Card>
  );
};

export default ScriptCard;
