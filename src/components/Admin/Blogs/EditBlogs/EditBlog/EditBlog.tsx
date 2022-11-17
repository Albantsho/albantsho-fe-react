import { Button, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import TextEditor from "@shared/TextEditor/TextEditor";
import useWeblogApi from "apis/Weblog.api";
import { CustomElement } from "interfaces/slate";
import { IWeblog } from "interfaces/weblog";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { jsx } from "slate-hyperscript";

interface IProps {
  oneWeblog: IWeblog;
}

const EditBlog = ({ oneWeblog }: IProps) => {
  const [textEditorValue, setTextEditorValue] = useState<string | undefined>(
    ""
  );
  const [blogValues, setBlogValues] = useState({
    title: oneWeblog.title,
    description: oneWeblog.description,
  });
  const [imageValue, setImageValue] = useState<File | string>(oneWeblog.media);
  const { updateWeblog } = useWeblogApi();
  const { back } = useRouter();
  const document = new DOMParser().parseFromString(
    oneWeblog.content,
    "text/html"
  );
  const deserialize = (
    el: any,
    markAttributes = {
      bold: false,
      italic: false,
      underline: false,
      code: false,
      color: "black",
    }
  ): any => {
    if (el.nodeType === Node.TEXT_NODE) {
      return jsx("text", markAttributes, el.textContent);
    } else if (el.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const nodeAttributes = { ...markAttributes };

    const color = el
      .getAttribute("style")
      ?.substring(8, el.getAttribute("style")?.length ? -1 : -20);

    if (typeof color === "string") {
      nodeAttributes.color = color;
    }

    // define attributes for text nodes
    if (el.nodeName === "STRONG") {
      nodeAttributes.bold = true;
    } else if (el.nodeName === "EM") {
      nodeAttributes.italic = true;
    } else if (el.nodeName === "U") {
      nodeAttributes.underline = true;
    } else if (el.nodeName === "CODE") {
      nodeAttributes.underline = true;
    }

    const children = Array.from(el.childNodes)
      .map((node) => deserialize(node, nodeAttributes))
      .flat();

    if (children.length === 0) {
      children.push(jsx("text", nodeAttributes, ""));
    }
    console.log(children);

    // console.log(el.getAttribute("className"));
    // console.log(el.getAttribute("style"));
    if (el.nodeName === "BODY") {
      return jsx("fragment", {}, children);
    } else if (el.nodeName === "BR") {
      return "\n";
    } else if (el.nodeName === "BLOCKQUOTE") {
      return jsx("element", { type: "blockquote" }, children);
    } else if (el.nodeName === "LINK") {
      // console.log(children);
      console.log(el.textContent);
      return jsx(
        "element",
        {
          type: "link",
          variant: el
            .getAttribute("href")
            ?.substring(1, el.getAttribute("href")?.length ? -1 : -20),
        },
        children
      );
    } else if (el.nodeName === "TYPOGRAPHY") {
      console.log(el.textContent);

      return jsx(
        "element",
        {
          type: "typography",
          variant: el
            .getAttribute("variant")
            ?.substring(1, el.getAttribute("variant")?.length ? -1 : -20),
        },
        children
      );
    } else if (el.nodeName === "UL") {
      return jsx("element", { type: "bulletList" }, children);
    } else if (el.nodeName === "LI") {
      return jsx("element", { type: "listItem" }, children);
    } else if (el.nodeName === "IMG") {
      return jsx(
        "element",
        {
          type: "image",
          url: el
            .getAttribute("src")
            ?.substring(1, el.getAttribute("src")?.length ? -1 : -20),
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
  deserialize(document.body);
  const initialValue: CustomElement[] = deserialize(document.body);

  useEffect(() => {
    setBlogValues({
      title: oneWeblog.title,
      description: oneWeblog.description,
    });
  }, []);

  const handleBlogValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
  };

  const handleGetPicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageValue(e.target.files[0]);
    } else {
      alert("Image not found");
    }
  };

  const updateBlog = async () => {
    const res = await updateWeblog(
      {
        title: blogValues.title,
        description: blogValues.description,
        content: textEditorValue?.toString(),
        image: imageValue,
      },
      oneWeblog._id
    );

    console.log(res);
  };

  return (
    <div>
      <label htmlFor="blog-title">
        <Typography
          variant="body1"
          className="futura mb-2 font-medium text-primary-700"
        >
          Title<span className="text-error-700">*</span>
        </Typography>
      </label>
      <CustomInput
        fullWidth
        value={blogValues.title}
        name="title"
        onChange={handleBlogValues}
        id="blog-title"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
        }}
      />
      <label htmlFor="blog-description">
        <Typography
          variant="body1"
          className="futura mt-5 mb-2 font-medium text-primary-700"
        >
          Short description<span className="text-error-700">*</span>
        </Typography>
      </label>
      <CustomInput
        fullWidth
        multiline
        value={blogValues.description}
        name="description"
        onChange={handleBlogValues}
        rows={3}
        id="blog-description"
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-input": { py: 1.5 },
        }}
      />
      <label>
        <Typography
          variant="body1"
          className="futura mt-5 mb-2 font-medium text-primary-700"
        >
          Body<span className="text-error-700">*</span>
        </Typography>
      </label>
      <TextEditor
        initialValue={initialValue}
        setTextEditorValue={setTextEditorValue}
      />
      <div className="my-5 mx-auto rounded-md border-2 border-dashed overflow-hidden border-primary-300 flex justify-center items-center">
        <form className="relative py-2 px-4 w-full flex justify-center items-center flex-col">
          <label
            className="absolute cursor-pointer inset-0"
            htmlFor="add-image"
          ></label>
          <input
            onChange={handleGetPicture}
            type="file"
            id="add-image"
            hidden
            name="script"
            accept="image/*"
          />
          <div className="mx-auto flex justify-center items-center"></div>
          <Typography
            variant="h6"
            color="primary.700"
            className="futura font-semibold text-center leading-normal"
          >
            Upload Image
          </Typography>
        </form>
      </div>
      <div className="mt-6 lg:mt-10 flex gap-2 lg:gap-6">
        <Button
          onClick={updateBlog}
          disableElevation
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="contained"
        >
          Save and update
        </Button>
        <Button
          onClick={back}
          className="px-4 py-2 lg:py-3 lg:px-6"
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditBlog;
