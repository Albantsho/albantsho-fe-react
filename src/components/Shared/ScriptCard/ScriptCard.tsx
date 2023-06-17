import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Icon,
  Typography,
  useMediaQuery,
  type CardProps,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import { IScript } from "interfaces/script";
import Image from "next/image";
import Link from "next/link";
import routes from "utils/routes";
import useUserStore from "store/user.store";
import ReviewedIcon from "./assets/reviewed.svg";

interface IProps extends CardProps {
  script: IScript;
  inHome?: boolean;
}

const ScriptCard = (props: IProps) => {
  const { script, sx, inHome, ...cardProps } = props;
  const user = useUserStore((state) => state.user);
  const matches = useMediaQuery("(min-width:640px)");

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0px 2px 7px rgba(117, 88, 162, 0.15)",
        ...sx,
      }}
      className="w-full"
      {...cardProps}
    >
      <Link
        legacyBehavior
        href={routes.marketplaceOneScript.url(script._id)}
        passHref
      >
        <Image
          width={500}
          height={300}
          className="object-cover w-full object-center h-[300px] cursor-pointer"
          src={
            script.image
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`
              : "/assets/images/julie.jpg"
          }
          loading="lazy"
          alt={script.title}
          unoptimized
        />
      </Link>

      <CardContent className="py-6 flex flex-col">
        <div className="flex flex-wrap gap-2">
          <Chip label={script.scriptFormat} sx={{ borderRadius: 1 }} />
        </div>
        {!matches && (
          <CustomRating
            readOnly
            defaultValue={script.reviewerRate}
            className="sm:hidden mt-4"
          />
        )}

        <div className="flex justify-between  mt-1 sm:mt-4 mb-2 gap-2">
          <Link
            href={routes.marketplaceOneScript.url(script._id)}
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
        <Typography className="flex-1 sm:min-h-[72px] ">
          {script.tagline}
        </Typography>
        <div className="">
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
          <CardActions className="justify-between px-0 pt-6 gap-3">
            {(!user.emailVerified || user.userType === "producer") &&
              !inHome && (
                <Btn
                  href={routes.marketplaceOneScript.url(script._id)}
                  size="large"
                  className="rounded-md"
                >
                  Place Bid
                </Btn>
              )}

            {matches && (
              <CustomRating
                readOnly
                color="primary"
                defaultValue={+script.reviewerRate}
                className="hidden sm:inline-flex"
              />
            )}
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScriptCard;
