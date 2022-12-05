import CustomPaginationComponent from "components/Marketplace/Index/PaginationMarketList/PaginationMarketList";
import { IWriterScript } from "interfaces/script";
import ProjectAccordion from "./ProjectAccordion/ProjectAccordion";

interface IProps {
  listScripts: IWriterScript[];
  setListScripts: React.Dispatch<React.SetStateAction<IWriterScript[]>>;
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
      {/* <CustomPaginationComponent /> */}
    </div>
  );
};

export default ProjectAccordionList;
