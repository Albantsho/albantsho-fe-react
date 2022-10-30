import {
  ButtonGroup,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { RiFileUserLine } from "react-icons/ri";
import BookMarkIcon from "./assets/book-mark.svg";

const MainStory = () => {
  return (
    <>
      <div className="bg-white w-full max-w-3xl  mx-auto py-14">
        <Typography className="text-center futura font-bold">
          LONG MAN OF LONG BEACH
        </Typography>
      </div>
      <div className="relative w-fit mx-auto">
        <ButtonGroup className="absolute flex flex-col -right-14 top-10">
          <Tooltip
            classes={{
              tooltip: "bg-black",
              tooltipPlacementLeft: "bg-black",
            }}
            title="Act Structure"
            placement="left"
          >
            <IconButton
              disableRipple
              className="bg-white text-primary-700 rounded-none w-12 h-12"
            >
              <RiFileUserLine />
            </IconButton>
          </Tooltip>
          <Tooltip
            classes={{
              tooltip: "bg-black",
              tooltipPlacementLeft: "bg-black",
            }}
            title="Character Bible"
            placement="left"
          >
            <IconButton
              disableRipple
              className="bg-white text-primary-700 rounded-none w-12 h-12"
            >
              <SvgIcon inheritViewBox component={BookMarkIcon} />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
        <div className="bg-white relative w-full max-w-3xl mx-auto mt-10 py-14 px-14">
          <Typography className="text-center futura font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quasi facere obcaecati quis vel, unde reprehenderit beatae velit.
            Nostrum dolorem reprehenderit eos aliquid reiciendis dignissimos
            quas quam inventore similique tenetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur expedita iure soluta. Error
            ullam deserunt perspiciatis maxime non. Beatae quae possimus
            cupiditate repellendus, accusantium sint. Enim quo aliquid
            temporibus deserunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum qui expedita ratione repellat maxime quia
            saepe cum, magni voluptates in architecto debitis veritatis,
            corrupti voluptas ullam fugiat dignissimos eligendi dolore?
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MainStory;
