import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Icon,
  Typography,
  Rating,
  type CardProps,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import useUserStore from "store/user.store";
import { IScript } from "interfaces/script";
import Link from "next/link";
import routes from "routes/routes";
import ReviewedIcon from "./assets/reviewed.svg";

interface IProps extends CardProps {
  script: IScript;
  inHome?: boolean;
}

const ScriptCard = (props: IProps) => {
  const { script, sx, inHome, ...cardProps } = props;
  const user = useUserStore((state) => state.user);

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0px 2px 7px rgba(117, 88, 162, 0.15)",
        ...sx,
      }}
      {...cardProps}
    >
      <Link
        legacyBehavior
        href={routes.marketplaceOneScript.dynamicUrl(script._id)}
        passHref
      >
        <CardMedia
          component="img"
          className="object-cover object-left w-full h-[250px] cursor-pointer"
          src={
            script.image
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`
              : "assets/images/julie.jpg"
          }
          loading="lazy"
        />
      </Link>

      <CardContent className="py-6">
        <div className="flex flex-wrap gap-2">
          <Chip label={script.scriptFormat} sx={{ borderRadius: 1 }} />
        </div>
        <Rating
          readOnly
          defaultValue={script.reviewerRate}
          className="sm:hidden mt-4"
        />
        <div className="flex justify-between mt-1 sm:mt-4 mb-2 gap-2">
          <Link
            href={routes.marketplaceOneScript.dynamicUrl(script._id)}
            passHref
          >
            <Typography
              variant="h4"
              color="primary.main"
              className="futura font-normal leading-tight"
            >
              {script.title}
            </Typography>
          </Link>
          {script.reviewed && (
            <Icon fontSize="large">
              <ReviewedIcon />
            </Icon>
          )}
        </div>
        <Typography>{script.tagline}</Typography>
        {!inHome && (
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
        {(!user.emailVerified || user.userType === "producer") && !inHome && (
          <Btn
            href={routes.marketplaceOneScript.dynamicUrl(script._id)}
            size="large"
            className="rounded-md"
          >
            Place Bid
          </Btn>
        )}
        <Rating
          readOnly
          defaultValue={+script.reviewerRate}
          className="hidden sm:inline-flex"
        />
      </CardActions>
    </Card>
  );
};

export default ScriptCard;
