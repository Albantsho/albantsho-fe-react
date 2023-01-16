import useScriptsApi from "apis/Scripts.api";
import Title from "components/Script/Title/Title";
import { IFullInformationScript } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const TitlePage = () => {
  const [script, setScript] = useState<IFullInformationScript>();
  const { getScript } = useScriptsApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getScriptsData() {
      try {
        if (query.id) {
          const res = await getScript(query.id as string);
          setScript(res.data.script);
        }
      } catch (error) {
        ("");
      }
    }
    getScriptsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Title Page</title>
      </Head>
      {script ? (
        <Title script={script} />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-16" />
      )}
    </>
  );
};

export default TitlePage;
