import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import { IWriterScript } from "interfaces/script";
import ProjectAccordion from "./ProjectAccordion/ProjectAccordion";
import emptyBlogs from "@assets/images/empty-blogs.png";
import Image from "next/image";

interface IProps {
  listScripts: IWriterScript[];
  setListScripts: React.Dispatch<React.SetStateAction<IWriterScript[]>>;
}

const ProjectAccordionList = ({ setListScripts, listScripts }: IProps) => {
  return listScripts.length === 0 ? (
    <div className="flex mx-auto">
      <Image
        width={384}
        height={384}
        loading="lazy"
        className="w-fit h-fit mx-auto mt-14 lg:mt-24"
        src={emptyBlogs}
        alt="empty blog list"
      />
    </div>
  ) : (
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
