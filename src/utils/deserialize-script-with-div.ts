import { jsx } from "slate-hyperscript";

const deserializeScriptWithDiv = (el: any): any => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", {}, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserializeScriptWithDiv(node))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", {}, ""));
  }

  if (el.nodeName === "BODY") {
    return jsx("fragment", {}, children);
  } else if (el.nodeName === "BR") {
    return "\n";
  } else if (el.nodeName === "P") {
    const tagType = el.getAttribute("itemID");
    if (tagType === "heading") {
      return jsx("element", { type: "heading" }, children);
    } else if (tagType === "action") {
      return jsx("element", { type: "action" }, children);
    } else if (tagType === "character") {
      return jsx("element", { type: "character" }, children);
    } else if (tagType === "dialogue") {
      return jsx("element", { type: "dialogue" }, children);
    } else if (tagType === "parentethical") {
      return jsx("element", { type: "parentethical" }, children);
    } else if (tagType === "transition") {
      return jsx("element", { type: "transition" }, children);
    } else if (tagType === "shot") {
      return jsx("element", { type: "shot" }, children);
    } else if (tagType === "general") {
      return jsx("element", { type: "general" }, children);
    } else {
      return jsx("element", { type: "paragraph" }, children);
    }
  } else if (el.nodeName === "DIV") {
    return jsx("element", { type: "page" }, children);
  } else {
    return children;
  }
};

const deserializeScriptWithOutDiv = (el: any): any => {
  if (el.nodeType === Node.TEXT_NODE) {
    return jsx("text", {}, el.textContent);
  } else if (el.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const children = Array.from(el.childNodes)
    .map((node) => deserializeScriptWithOutDiv(node))
    .flat();

  if (children.length === 0) {
    children.push(jsx("text", {}, ""));
  }

  if (el.nodeName === "BODY") {
    return jsx("fragment", {}, children);
  } else if (el.nodeName === "BR") {
    return "\n";
  } else if (el.nodeName === "P") {
    const tagType = el.getAttribute("itemID");
    if (tagType === "heading") {
      return jsx("element", { type: "heading" }, children);
    } else if (tagType === "action") {
      return jsx("element", { type: "action" }, children);
    } else if (tagType === "character") {
      return jsx("element", { type: "character" }, children);
    } else if (tagType === "dialogue") {
      return jsx("element", { type: "dialogue" }, children);
    } else if (tagType === "parentethical") {
      return jsx("element", { type: "parentethical" }, children);
    } else if (tagType === "transition") {
      return jsx("element", { type: "transition" }, children);
    } else if (tagType === "shot") {
      return jsx("element", { type: "shot" }, children);
    } else if (tagType === "general") {
      return jsx("element", { type: "general" }, children);
    } else {
      return jsx("element", { type: "paragraph" }, children);
    }
  } else {
    return children;
  }
};

export { deserializeScriptWithDiv, deserializeScriptWithOutDiv };
