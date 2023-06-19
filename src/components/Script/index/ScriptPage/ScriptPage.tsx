import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import React from "react";
import { QueryClient } from "react-query";
import ScriptEditor from "../ScriptEditor/ScriptEditor";

interface IProps {
  script: IFullInformationScript;
  setHtmlInitialValue: React.Dispatch<React.SetStateAction<string>>;
  htmlInitialValue: string;
  id: string | string[];
}

const queryClient = new QueryClient();

const ScriptPage = ({
  script,
  htmlInitialValue,
  setHtmlInitialValue,
  id,
}: IProps) => {
  const { query } = useRouter();

  return (
    <>
      <ScriptSidebarOnMobile script={script} />
      <div className="py-3 lg:py-5 flex px-5 sm:px-10 w-full max-w-screen-2xl">
        {query.tab && (
          <div className="max-w-sm w-full bg-white pt-11 px-6 space-y-4 overflow-y-auto mb-8 h-screen min-w-[384px] hidden sticky top-0 xl:block">
            {query.tab === "scenes" && <ScenesList />}
            {query.tab === "export" && <ExportFile script={script} />}
            {query.tab === "document" && <ScriptDocument script={script} />}
          </div>
        )}
        <ScriptEditor htmlInitialValue={htmlInitialValue} script={script} />
      </div>
    </>
  );
};

export default ScriptPage;
