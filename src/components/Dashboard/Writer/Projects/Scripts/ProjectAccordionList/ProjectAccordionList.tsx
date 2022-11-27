import { IWriterScript } from "interfaces/script";
import { Dispatch, SetStateAction } from "react";
import ProjectAccordion from "./ProjectAccordion/ProjectAccordion";

interface IProps {
  listScripts: IWriterScript[];
  setListScripts: Dispatch<SetStateAction<IWriterScript[]>>;
}

const ProjectAccordionList = ({ setListScripts, listScripts }: IProps) => {
  return (
    <div className="mt-4 md:mt-6 pb-16">
      {listScripts.map((script) => {
        return (
          <ProjectAccordion
            key={script._id}
            script={script}
            setListScripts={setListScripts}
          />
        );
      })}
    </div>
  );
};

export default ProjectAccordionList;
