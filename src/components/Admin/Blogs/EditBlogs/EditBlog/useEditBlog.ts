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
  const { push } = useRouter();

  const deserialize = (
    el: any,
    markAttributes = {
      bold: false,
      italic: false,
      underline: false,
      code: false,
      style: "",
    }
  ): any => {
    if (el.nodeType === Node.TEXT_NODE) {
      return jsx("text", markAttributes, el.textContent);
    } else if (el.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const nodeAttributes = { ...markAttributes };

    // const color = el
    //   .getAttribute("style")
    //   ?.substring(0, el.getAttribute("style")?.length - 2);
    // // console.log(el.setAttribute("style", color));
    // // console.log(color);

    // if (typeof color === "string") {
    //   nodeAttributes.color = color;
    // }

    // define attributes for text nodes
    if (el.nodeName === "STRONG") {
      console.log(
        el
          .getAttribute("style")
          ?.substring(2, el.getAttribute("style")?.length - 2)
      );
      nodeAttributes.style = el
        .getAttribute("style")
        ?.substring(2, el.getAttribute("style")?.length - 2);
      nodeAttributes.bold = true;
    } else if (el.nodeName === "EM") {
      console.log(
        el
          .getAttribute("style")
          ?.substring(2, el.getAttribute("style")?.length - 2)
      );
      nodeAttributes.style = el
        .getAttribute("style")
        ?.substring(2, el.getAttribute("style")?.length - 2);
      nodeAttributes.italic = true;
    } else if (el.nodeName === "U") {
      console.log(
        el
          .getAttribute("style")
          ?.substring(2, el.getAttribute("style")?.length - 2)
      );
      nodeAttributes.style = el
        .getAttribute("style")
        ?.substring(2, el.getAttribute("style")?.length - 2);
      nodeAttributes.underline = true;
    } else if (el.nodeName === "CODE") {
      console.log(
        el
          .getAttribute("style")
          ?.substring(2, el.getAttribute("style")?.length - 2)
      );
      nodeAttributes.style = el
        .getAttribute("style")
        ?.substring(2, el.getAttribute("style")?.length - 2);
      nodeAttributes.underline = true;
    }
    nodeAttributes.style = el
      .getAttribute("style")
      ?.substring(2, el.getAttribute("style")?.length - 2);

    const children = Array.from(el.childNodes)
      .map((node) => deserialize(node, nodeAttributes))
      .flat();

    if (children.length === 0) {
      children.push(jsx("text", nodeAttributes, ""));
    }
    // console.log(children);

    // console.log(el.getAttribute("className"));
    // console.log(el.getAttribute("style"));
    if (el.nodeName === "BODY") {
      return jsx("fragment", {}, children);
    } else if (el.nodeName === "BR") {
      return "\n";
    } else if (el.nodeName === "BLOCKQUOTE") {
      return jsx("element", { type: "blockquote" }, children);
    } else if (el.nodeName === "A") {
      // console.log(children);
      // console.log(el.textContent);
      // console.log(el.getAttribute("href"));
      return jsx(
        "element",
        {
          type: "link",
          url: el
            .getAttribute("href")
            ?.substring(1, el.getAttribute("href")?.length - 1),
        },
        children
      );
    } else if (el.nodeName === "H1") {
      // console.log(
      //   el
      //     .getAttribute("style")
      //     ?.substring(1, el.getAttribute("style")?.length - 1)
      // );
      return jsx("element", { type: "headOne" }, children);
    } else if (el.nodeName === "H2") {
      return jsx("element", { type: "headTwo" }, children);
    } else if (el.nodeName === "H3") {
      return jsx("element", { type: "headThree" }, children);
    } else if (el.nodeName === "H4") {
      return jsx("element", { type: "headFour" }, children);
    } else if (el.nodeName === "H5") {
      return jsx("element", { type: "headFive" }, children);
    } else if (el.nodeName === "H6") {
      return jsx("element", { type: "headSix" }, children);
    } else if (el.nodeName === "P") {
      return jsx("element", { type: "paragraph" }, children);
    } else if (el.nodeName === "UL") {
      return jsx("element", { type: "bulletList" }, children);
    } else if (el.nodeName === "OL") {
      return jsx("element", { type: "numberList" }, children);
    } else if (el.nodeName === "LI") {
      return jsx("element", { type: "listItem" }, children);
    } else if (el.nodeName === "IMG") {
      // console.log(
      //   el.getAttribute("src")?.substring(1, el.getAttribute("src")?.length - 1)
      // );
      return jsx(
        "element",
        {
          type: "image",
          url: el
            .getAttribute("src")
            ?.substring(1, el.getAttribute("src")?.length - 2),
        },
        children
      );
    } else if (el.nodeName === "TABLE") {
      return jsx("element", { type: "table" }, children);
    } else if (el.nodeName === "TR") {
      return jsx("element", { type: "tableRow" }, children);
    } else if (el.nodeName === "TD") {
      return jsx("element", { type: "tableCell" }, children);
    } else {
      return children;
    }
  };
  let initialValue: CustomElement[] = deserialize(htmlContent.body);

  console.log(deserialize(htmlContent.body));

  const onSubmit = async (data: IEditWeblogFormValues) => {
    try {
      setLoading(true);
      console.log(textEditorValue);
      const res = await updateWeblog(
        {
          title: data.title,
          description: data.description,
          content: textEditorValue,
          image: data.image[0],
        },
        _id
      );
      console.log(res);
      push("/admin/blogs");
      setTextEditorValue("");
      initialValue = [{ type: "paragraph", children: [{ text: "" }] }];
    } catch (error) {
      console.log(error);
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
