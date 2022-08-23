import Image from "next/image";

import iDraftLg from "./assets/i-draft-lg.jpg";
import iDraftSmall from "./assets/i-draft-small.jpg";


const ImageSection = () => {
  return (
    <div className="w-full">
      <div className="sm:hidden object-cover">
        <Image src={iDraftSmall} layout="responsive"  />
      </div>
      <div className="hidden sm:block object-cover" >
        <Image src={iDraftLg}  layout="responsive" />
      </div>
    </div>
  );
};

export default ImageSection;
