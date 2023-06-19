import useScriptsApi from "apis/Scripts.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

const useScriptDocument = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { listAllCollaborators } = useScriptsApi();
  const { query } = useRouter();

  const scriptID = typeof query?.id === "string" ? query.id : "";

  const {
    data: collaboratorsData,
    isLoading: loadingGetCollaboratorList
  } = useQuery(
    ["collaborator", scriptID],
    () => listAllCollaborators(scriptID),
    {
      enabled: scriptID.length > 0,
    }
  );



  const openInfoCollaborator = () => setActiveButton(0);
  const openListCollaborator = () => setActiveButton(1);



  return {
    openInfoCollaborator,
    openListCollaborator,
    activeButton,
    collaboratorsList: collaboratorsData,
    loadingGetCollaboratorList
  };
};

export default useScriptDocument;
