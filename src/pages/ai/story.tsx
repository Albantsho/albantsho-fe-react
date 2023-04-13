import { PDFDownloadLink } from "@react-pdf/renderer";
import Btn from "@shared/Btn/Btn";
import AiLayout from "@shared/Layouts/AiLayout/AiLayout";
import PDFFile from "@shared/PdfFile/PdfFile";
import AiWriteStory from "components/AiWrite/AiWriteStory/AiWriteStory";
import Head from "next/head";
import React from "react";

const AiWriteStoryPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      <AiWriteStory />
      {/* <PDFDownloadLink
        document={
          <PDFFile
            scriptValue={story}
            basedOn=""
            names=""
            writtenBy=""
            draftDate=""
            title={titleStory}
          />
        }
        fileName={titleStory}
      >
        <Btn className="px-4 py-2 lg:px-6 mt-5 lg:py-3">Export File</Btn>
      </PDFDownloadLink> */}
    </>
  );
};

AiWriteStoryPage.getLayout = (page: React.ReactElement) => (
  <AiLayout>{page}</AiLayout>
);

export default AiWriteStoryPage;
