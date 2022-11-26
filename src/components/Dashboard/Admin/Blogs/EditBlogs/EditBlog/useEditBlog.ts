import { yupResolver } from "@hookform/resolvers/yup";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { jsx } from "slate-hyperscript";
import errorHandler from "utils/error-handler";
import { editBlogSchema } from "./validation/editBlog.validate";
import { getStyleObjectFromString } from "utils/formatter";
import routes from "routes/routes";

interface IEditWeblogFormValues {
  title: string;
  description: string;
  image: FileList;
}

interface IProps {
  oneWeblog: IWeblog;
}

const useEditBlog = ({
  oneWeblog: { title, description, _id, content },
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditWeblogFormValues>({
    defaultValues: {
      title,
      description,
    },
    resolver: yupResolver(editBlogSchema),
  });
  const [loading, setLoading] = useState(false);
  const [textEditorValue, setTextEditorValue] = useState<string | undefined>(
    ""
  );
  const htmlContent = new DOMParser().parseFromString(content, "text/html");
  const { updateWeblog } = useWeblogApi();
  const { replace } = useRouter();

  interface IMarkAttributes {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  }

  const deserialize = (el: any, markAttributes: IMarkAttributes = {}): any => {
    if (el.nodeType === Node.TEXT_NODE) {
      return jsx("text", markAttributes, el.textContent);
    } else if (el.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const nodeAttributes = { ...markAttributes };
    if (el.nodeName === "STRONG") {
      const color = el.getAttribute("style");
      if (color !== null) {
        nodeAttributes.color = color.substring(
          6,
          el.getAttribute("style").length - 1
        );
      }

      nodeAttributes.bold = true;
    } else if (el.nodeName === "EM") {
      const color = el.getAttribute("style");
      if (color !== null) {
        nodeAttributes.color = color.substring(
          6,
          el.getAttribute("style").length - 1
        );
      }

      nodeAttributes.italic = true;
    } else if (el.nodeName === "U") {
      const color = el.getAttribute("style");
      if (color !== null) {
        nodeAttributes.color = color.substring(
          6,
          el.getAttribute("style").length - 1
        );
      }

      nodeAttributes.underline = true;
    } else if (el.nodeName === "CODE") {
      const color = el.getAttribute("style");
      if (color !== null) {
        nodeAttributes.color = color.substring(
          6,
          el.getAttribute("style").length - 1
        );
      }

      nodeAttributes.underline = true;
    } else {
      const color = el.getAttribute("style");
      if (color !== null) {
        nodeAttributes.color = color.substring(
          6,
          el.getAttribute("style").length - 1
        );
      }
    }

    const children = Array.from(el.childNodes)
      .map((node) => deserialize(node, nodeAttributes))
      .flat();

    if (children.length === 0) {
      children.push(jsx("text", nodeAttributes, ""));
    }

    if (el.nodeName === "BODY") {
      return jsx("fragment", {}, children);
    } else if (el.nodeName === "BR") {
      return "\n";
    } else if (el.nodeName === "BLOCKQUOTE") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "blockquote", style: styles }, children);
    } else if (el.nodeName === "A") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      const emailUrl = el.getAttribute("href").includes("mailto:");
      if (emailUrl) {
        return jsx(
          "element",
          {
            type: "email",
            style: styles,
            email: el.getAttribute("href"),
          },
          children
        );
      } else {
        return jsx(
          "element",
          {
            type: "link",
            style: styles,
            url: el.getAttribute("href"),
          },
          children
        );
      }
    } else if (el.nodeName === "H1") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headOne", style: styles }, children);
    } else if (el.nodeName === "H2") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headTwo", style: styles }, children);
    } else if (el.nodeName === "H3") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headThree", style: styles }, children);
    } else if (el.nodeName === "H4") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headFour", style: styles }, children);
    } else if (el.nodeName === "H5") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headFive", style: styles }, children);
    } else if (el.nodeName === "H6") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "headSix", style: styles }, children);
    } else if (el.nodeName === "P") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "paragraph", style: styles }, children);
    } else if (el.nodeName === "UL") {
      return jsx("element", { type: "bulletList" }, children);
    } else if (el.nodeName === "OL") {
      return jsx("element", { type: "numberList" }, children);
    } else if (el.nodeName === "LI") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "listItem", style: styles }, children);
    } else if (el.nodeName === "IMG") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx(
        "element",
        {
          type: "image",
          style: styles,
          url: el.getAttribute("src"),
        },
        children
      );
    } else if (el.nodeName === "TABLE") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "table", style: styles }, children);
    } else if (el.nodeName === "TR") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }
      return jsx("element", { type: "tableRow", style: styles }, children);
    } else if (el.nodeName === "TD") {
      const stringStyles = el.getAttribute("style");
      let styles;
      if (stringStyles !== null) {
        styles = getStyleObjectFromString(stringStyles);
      }

      return jsx("element", { type: "tableCell", style: styles }, children);
    } else {
      return children;
    }
  };
  let initialValue: CustomElement[] = deserialize(htmlContent.body);

  const onSubmit = async (data: IEditWeblogFormValues) => {
    try {
      setLoading(true);
      await updateWeblog(
        {
          title: data.title,
          description: data.description,
          content: textEditorValue,
          image: data.image[0] && data.image[0],
        },
        _id
      );
      replace(routes.blogsAdminDashboard.url);
      setTextEditorValue("");
      initialValue = [{ type: "paragraph", children: [{ text: "" }] }];
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    initialValue,
    onSubmit,
    setTextEditorValue,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useEditBlog;
