import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import ScriptSidebarOnMobile from "@shared/Layouts/ScriptLayout/ScriptList/ScriptSidebarOnMobile/ScriptSidebarOnMobile";
import useDraftApi from "apis/Draft.api";
import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import CommentList from "components/Script/CommentList/CommentList";
import ExportFile from "components/Script/ExportFile/ExportFile";
import ScriptEditor from "components/Script/index/ScriptEditor/ScriptEditor";
import ScriptPage from "components/Script/index/ScriptPage/ScriptPage";
import ScenesList from "components/Script/ScenesList/ScenesList";
import ScriptDocument from "components/Script/ScriptDocument/ScriptDocument";
import { IComment } from "interfaces/comment";
import { IFullInformationScript } from "interfaces/script";
import { CustomElement } from "interfaces/slate";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useRef, useState } from "react";
import { DotLoader } from "react-spinners";
import { io } from "socket.io-client";
import errorHandler from "utils/error-handler";

const Script: NextPageWithLayout = () => {
  const { query } = useRouter();

  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();
  const { getOneDraft } = useDraftApi();
  let initialValue: CustomElement[] = [
    {
      type: "page",
      children: [{ type: "heading", children: [{ text: "" }] }],
    },
  ];

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
          const resDraft = await getOneDraft(query.id as string);
          initialValue = resDraft.data.draft;
          setLoading(false);
        }
      } catch (error) {
        ("");
      } finally {
        setLoading(false);
      }
    }
    getScriptsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      {!loading && script ? (
        <ScriptPage initialValue={initialValue} script={script} />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
