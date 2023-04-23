import AiLayout from "@shared/Layouts/AiLayout/AiLayout";
import AiEditor from "components/AiWrite/AiEditor/AiEditor";
import Head from "next/head";

const AiEditorPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      <AiEditor />
    </>
  );
};

AiEditorPage.getLayout = (page: React.ReactElement) => (
  <AiLayout>{page}</AiLayout>
);

export default AiEditorPage;
