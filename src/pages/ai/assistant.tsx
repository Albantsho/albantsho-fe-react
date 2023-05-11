import AiLayout from "@shared/Layouts/AiLayout/AiLayout";
import AiAssistant from "components/AiWrite/AiAssistant/AiAssistant";
import Head from "next/head";
import React from "react";

const AiAssistantPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Assistant</title>
      </Head>
      <AiAssistant />
    </>
  );
};

AiAssistantPage.getLayout = (page: React.ReactElement) => (
  <AiLayout>{page}</AiLayout>
);

export default AiAssistantPage;
