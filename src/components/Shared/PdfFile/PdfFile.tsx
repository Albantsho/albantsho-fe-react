import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import parse from "html-react-parser";
import ReactDOMServer from "react-dom/server";
import { Html } from "react-pdf-html";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import { serializeWithoutDiv } from "utils/serialize-slate";

const styles = StyleSheet.create({
  pageNumber: {
    fontSize: 14,
    bottom: 5,
    right: 0,
    left: 0,
    textAlign: "center",
    color: "black",
    fontFamily: "Courier",
    position: "absolute",
    zIndex: "999999999999",
    paddingRight: "6px",
    display: "flex",
    height: "25px",
  },
  body: {
    padding: "30px 0px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "100px",
    padding: "25px 35px",
    paddingTop: "235px",
  },
  tag: {
    fontFamily: "Courier",
    fontSize: "20px",
    textAlign: "center",
    paddingBottom: "80px",
  },
  tagHelp: {
    fontFamily: "Courier",
    fontSize: "20px",
    textAlign: "center",
    width: "100%",
    paddingBottom: "10px",
  },
});

interface IProps {
  scriptValue: string;
  writtenBy: string;
  title: string;
  basedOn: string | null;
  draftDate: string | null;
  names: string;
}

const PDFFile = ({
  scriptValue,
  writtenBy,
  basedOn,
  draftDate,
  title,
  names,
}: IProps) => {
  const htmlContent = new DOMParser().parseFromString(scriptValue, "text/html");
  const value = deserializeScriptWithOutDiv(htmlContent.body);
  const valueForConvertPdf = serializeWithoutDiv({ children: value });

  const element = (
    <html lang="en">
      <body>{parse(valueForConvertPdf as string)}</body>
    </html>
  );

  const html = ReactDOMServer.renderToStaticMarkup(element);

  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.tag}>{title}</Text>
          <Text style={styles.tagHelp}>{writtenBy}</Text>
          <Text style={styles.tag}>{names}</Text>
          <Text style={styles.tag}>{basedOn || " "}</Text>
          <Text style={styles.tag}>
            {new Date(
              draftDate ? (draftDate as string) : Date.now()
            ).toLocaleDateString()}
          </Text>
        </View>
        <Html>{html}</Html>
        <Text
          fixed
          visibility="visible"
          color="black"
          textAnchor="middle"
          opacity={1}
          break
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
