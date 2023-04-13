import { Skeleton, Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import AiLayout from "@shared/Layouts/AiLayout/AiLayout";
import PDFFile from "@shared/PdfFile/PdfFile";
import useAiApi from "apis/ai.api";
import AiWriteScript from "components/AiWrite/AiWriteScript/AiWriteScript";
import Editor from "components/AiWrite/Editor/Editor";
import Title from "components/AiWrite/Title/Title";
import Head from "next/head";
import React, { useState } from "react";
import { useMutation } from "react-query";
import customHandler from "utils/custom-handler";

const controller = new AbortController();

const AiWriteScriptPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Script</title>
      </Head>
      <AiWriteScript />
      {/* <PDFDownloadLink
        document={
          <PDFFile
            scriptValue={script}
            basedOn=""
            names=""
            writtenBy=""
            draftDate=""
            title={titleScript}
          />
        }
        fileName={titleScript}
      >
        <Btn className="px-4 py-2 lg:px-6 mt-5 lg:py-3">Export File</Btn>
      </PDFDownloadLink> */}
    </>
  );
};

AiWriteScriptPage.getLayout = (page: React.ReactElement) => (
  <AiLayout>{page}</AiLayout>
);

export default AiWriteScriptPage;
