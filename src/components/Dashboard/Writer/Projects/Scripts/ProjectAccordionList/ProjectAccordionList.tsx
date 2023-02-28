import emptyBlogs from "@assets/images/empty-blogs.png";
import { IWriterScript } from "interfaces/script";
import Image from "next/image";
import ProjectAccordion from "./ProjectAccordion/ProjectAccordion";

interface IProps {
  listScripts: IWriterScript[];
}

const ProjectAccordionList = ({ listScripts }: IProps) => {
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
    <div className="mt-4 md:mt-6">
      {listScripts.map((script) => {
        return <ProjectAccordion key={script._id} script={script} listScripts={listScripts} />;
      })}
    </div>
  );
};

export default ProjectAccordionList;
