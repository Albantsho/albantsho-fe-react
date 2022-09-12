import { Rating, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { Dispatch, SetStateAction } from "react";
import  React from "react";

interface IProps {
  setOpenSendReview: Dispatch<SetStateAction<boolean>>;
}

const listTitles = [
  "INTRODUCTION",
  "Plot",
  "Character(s)",
  "Genre tropes and Story structure",
  "Dialogue",
];

const Description = ({ setOpenSendReview }: IProps) => {
  return (
    <div className="px-6 sm:px-10  lg:px-44  sm:mt-6 lg:mt-14">
      {listTitles.map((title) => (
        <React.Fragment key={title}>
          <Typography
            variant="h5"
            className="futura text-primary-700 font-medium leading-normal mt-4 sm:mt-6 lg:mt-10"
          >
            {title}
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            massa praesent pellentesque sit a. Nunc mattis aliquam consectetur
            mi sit tincidunt eget nunc. Cursus euismod rhoncus venenatis in
            faucibus rhoncus blandit. Nisi viverra tellus nulla est sed pharetra
            sit id. Turpis arcu lectus nulla tellus diam libero, sit etiam ut.
            Pharetra purus quisque consectetur convallis amet. Commodo,
            consequat enim sem turpis posuere sit. Faucibus eu, eget euismod
            urna ornare mauris. Nec, eu mattis est mattis. Ut donec tincidunt.
          </Typography>
        </React.Fragment>
      ))}
 
      <Typography
        variant="h5"
        className="futura text-primary-700 font-medium leading-normal mt-4 sm:mt-6 lg:mt-10"
      >
        Story quality
      </Typography>
      <Typography
        variant="h6"
        className="futura text-primary-700 font-extralight leading-normal"
      >
        (how relevant is this story concept and what is unique or not about its
        approach to the ide)
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa
        praesent pellentesque sit a. Nunc mattis aliquam consectetur mi sit
        tincidunt eget nunc. Cursus euismod rhoncus venenatis in faucibus
        rhoncus blandit. Nisi viverra tellus nulla est sed pharetra sit id.
        Turpis arcu lectus nulla tellus diam libero, sit etiam ut. Pharetra
        purus quisque consectetur convallis amet. Commodo, consequat enim sem
        turpis posuere sit. Faucibus eu, eget euismod urna ornare mauris. Nec,
        eu mattis est mattis. Ut donec tincidunt.
      </Typography>


      <Typography
        variant="h5"
        className="futura text-primary-700 font-medium leading-normal mt-10"
      >
        Suggestions
      </Typography>
      <Typography
        variant="h6"
        className="futura text-primary-700 font-extralight leading-normal"
      >
        (your final thoughts and suggestions)
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus massa
        praesent pellentesque sit a. Nunc mattis aliquam consectetur mi sit
        tincidunt eget nunc. Cursus euismod rhoncus venenatis in faucibus
        rhoncus blandit. Nisi viverra tellus nulla est sed pharetra sit id.
        Turpis arcu lectus nulla tellus diam libero, sit etiam ut. Pharetra
        purus quisque consectetur convallis amet. Commodo, consequat enim sem
        turpis posuere sit. Faucibus eu, eget euismod urna ornare mauris. Nec,
        eu mattis est mattis. Ut donec tincidunt.
      </Typography>

      <Typography
        variant="h5"
        className="futura text-primary-700 font-medium leading-normal mt-10"
      >
        Suggestions
      </Typography>

      <div className="mt-4 sm:mt-10 gap-3 flex flex-wrap">
        <Rating
          size="large"
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
        />
        <Typography
          variant="h6"
          className="futura text-primary-700 font-medium leading-normal"
        >
          - GREAT!
        </Typography>
      </div>

      <div className="mt-4 sm:mt-10 lg:mt-16 mb-16 sm:mb-28 lg:mb-56 flex flex-wrap justify-start w-full gap-y-3 gap-x-8 ">
        <Btn
          onClick={() => setOpenSendReview(true)}
          className="py-3 px-3  min-w-[170px] flex-1 "
        >
          SEND Review AS EMAIL
        </Btn>
        <Btn
          sx={{ "&.MuiButtonBase-root": { border: "1px solid #7953B5" } }}
          className="py-3 px-3  min-w-[170px] flex-1 bg-white text-primary-700 border "
        >
          EDIT REVIEW
        </Btn>
      </div>
    </div>
  );
};

export default Description;