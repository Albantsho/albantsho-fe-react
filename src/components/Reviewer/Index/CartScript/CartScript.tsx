import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomRating from "@shared/CustomRating/CustomRating";
import { FiArrowUpRight } from "react-icons/fi";

const CartScript = () => {
  return (
    <Card
    data-aos="fade-left"
      elevation={0}
      className="h-fit hidden lg:block shadow-primary  pt-7 pb-3 flex-[0.7]  xl:flex-[0.55] max-w-2xl"
    >
      <CardActions className="px-5 py-0 space-x-3 lg:space-x-6">
        <Button disableElevation className="py-[10px] px-4" variant="contained">
          Type A
        </Button>
        <Button
          className="py-[10px] px-4"
          variant="outlined"
          startIcon={<FiArrowUpRight />}
        >
          View script
        </Button>
      </CardActions>
      <Divider className="my-7" />
      <CardContent className="px-5 py-0 ">
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura  font-medium w-[120px] text-neutral-800"
          >
            Title:
          </Typography>
          <Typography
            variant="h6"
            className="futura flex-1 font-medium text-primary-700 leading-normal"
          >
            The Long Man of Long Beach
          </Typography>
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Genre:
          </Typography>
          <Chip className="py-3 px-4 rounded-md" label="Tv pilot" />
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Entry Date:
          </Typography>
          <Typography
            variant="h6"
            className="futura font-medium text-neutral-800"
          >
            23-04-22
          </Typography>
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="h6"
            className="futura font-medium w-[120px] text-neutral-800"
          >
            Rating:
          </Typography>
          <CustomRating name="half-rating" defaultValue={4.5} precision={0.5} />
        </div>

        <Btn className="w-full  py-3 rounded-lg">Begin review</Btn>
      </CardContent>
    </Card>
  );
};

export default CartScript;
