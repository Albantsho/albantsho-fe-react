import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Rating,

  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { FiArrowUpRight } from "react-icons/fi";


const CartScript = () => {
  return (
    <Card className="h-fit flex-[0.5]">
      <CardActions className="py-6 px-5">
        <Button variant="contained">Type A</Button>
        <Button variant="outlined" startIcon={<FiArrowUpRight />}>
          View script
        </Button>
      </CardActions>
      <Divider />
      <CardContent className="py-6 px-5">
        <div className="flex items-center mb-8">
          <Typography
            variant="body1"
            className="futura font-medium w-24 pr-6 text-neutral-800"
          >
            Title:
          </Typography>
          <Typography
            variant="h6"
            className="futura font-medium text-primary-700"
          >
            The Long Man of Long Beach
          </Typography>
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="body1"
            className="futura font-medium w-24 pr-6 text-neutral-800"
          >
            Genre:
          </Typography>
          <Chip label="Tv pilot" />
        </div>
        <div className="flex items-center mb-8">
          <Typography
            variant="body1"
            className="futura font-medium w-24 pr-6 text-neutral-800"
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
            variant="body1"
            className="futura font-medium w-24 pr-6 text-neutral-800"
          >
            Rating:
          </Typography>
          <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
        </div>

        <Btn className="w-full mb-6 py-3">Begin review</Btn>
      </CardContent>
    </Card>
  );
};

export default CartScript;
