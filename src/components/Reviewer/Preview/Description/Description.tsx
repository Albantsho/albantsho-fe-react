import { Rating, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { Dispatch, SetStateAction } from "react";
import React from "react";

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
    <div className="sm:px-10  lg:px-44 mt-14">
      {listTitles.map((title) => (
        <React.Fragment key={title}>
          <Typography
            variant="h4"
            className="futura text-primary-700 font-medium leading-6 mb-5 mt-10"
          >
            {title}
          </Typography>
          <Typography variant="body1" className="font-medium">
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
        variant="h4"
        className="futura text-primary-700 font-medium leading-normal mt-10"
      >
        Story quality
      </Typography>
      <Typography
        variant="h4"
        className="futura text-primary-700 font-light mb-5 leading-7"
      >
        (how relevant is this story concept and what is unique or not about its
        approach to the ide)
      </Typography>
      <Typography variant="body1" className="font-medium">
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
        variant="h4"
        className="futura text-primary-700 font-medium leading-normal mt-10"
      >
        Suggestions
      </Typography>
      <Typography
        variant="h4"
        className="futura text-primary-700 font-light mb-5 leading-7"
      >
        (your final thoughts and suggestions)
      </Typography>
      <Typography variant="body1" className="font-medium">
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
        variant="h4"
        className="futura text-primary-700 font-medium leading-normal mt-10"
      >
        RATING
      </Typography>

      <div className="mt-4 sm:mt-10 gap-3 flex flex-wrap">
        <Rating
          size="large"
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
        />
        <Typography
          variant="h5"
          className="futura text-primary-700 font-medium leading-normal"
        >
          - GREAT!
        </Typography>
      </div>

      <div className="mt-16 mb-16  flex flex-wrap justify-start w-full gap-y-3 gap-x-8 ">
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
