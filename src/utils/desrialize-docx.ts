import { jsx } from "slate-hyperscript";

const deserializeDocx = (el: any): any => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", {}, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserializeDocx(node))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", {}, ""));
  }

  if (el.nodeName === "BODY") {
    return jsx("fragment", {}, children);
  } else if (el.nodeName === "BR") {
    return "\n";
  } else {
    return jsx("element", { type: "paragraph" }, children);
  }
};

export default deserializeDocx;
