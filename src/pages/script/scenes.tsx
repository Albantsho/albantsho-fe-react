import ScriptLayout from "@shared/Layouts/ScriptLayout/ScriptLayout";
import Head from "next/head";
import { NextPageWithLayout } from "pages/_app";

const Script: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Script </title>
      </Head>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempora
          ipsam perferendis illum corrupti rem beatae, enim facere quo
          reprehenderit ullam commodi repellat iste dolorem reiciendis alias
          atque fugiat expedita.
        </p>
      </div>
    </>
  );
};

Script.getLayout = (page: React.ReactElement) => (
  <ScriptLayout>{page}</ScriptLayout>
);

export default Script;
