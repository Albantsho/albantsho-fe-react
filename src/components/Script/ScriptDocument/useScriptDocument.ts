import { useState } from "react";

const useScriptDocument = () => {
  const [activeButton, setActiveButton] = useState(0);



  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);


  return {
    openInfoCollaborator,
    openListCollaborator,
    activeButton,
  };
};

export default useScriptDocument;
