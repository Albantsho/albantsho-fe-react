import { IconButton, Modal, SvgIcon, Typography, Zoom } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { AiOutlineClose } from "react-icons/ai";
import Celebration from "./assets/celebration.svg";

interface IProps {
  openCongratulation: boolean;
  handleCloseCongratulation: () => void;
  handleGoToHomePage: () => void;
}

const CongratulationModal = ({
  openCongratulation,
  handleCloseCongratulation,
  handleGoToHomePage,
}: IProps) => {
  return (
    <Modal className="px-5" open={openCongratulation}>
      <Zoom in={openCongratulation}>
        <div className="px-10 relative text-center bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto py-8 rounded-lg">
          <IconButton
            onClick={handleGoToHomePage}
            color="error"
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <SvgIcon
            component={Celebration}
            inheritViewBox
            className="w-28 h-28"
          />
          <Typography
            className="font-normal leading-normal mt-2"
            color="primary.700"
            variant="h3"
          >
            Congratulation
          </Typography>
          <Typography
            className=" font-normal mb-6 mt-3"
            variant="body1"
            component="p"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            illo molestias, placeat corrupti molestiae eaque, at culpa magni cum
            numquam fugit rerum nihil dignissimos eveniet officia beatae
            perferendis odio soluta?
          </Typography>

          <Btn
            onClick={handleCloseCongratulation}
            size="large"
            className="py-3 px-5 text-white bg-primary-700 rounded-lg"
          >
            Go to blog page
          </Btn>
        </div>
      </Zoom>
    </Modal>
  );
};

export default CongratulationModal;
