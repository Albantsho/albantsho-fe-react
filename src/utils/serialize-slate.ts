import escapeHTML from "escape-html";
import { type Descendant, Element, Text } from "slate";

interface INode {
  children: Descendant[];
}

export const serializeWithoutDiv = (
  node: INode | Descendant
): string | undefined => {
  if (Text.isText(node)) {
    const string = escapeHTML(node.text);
    return string;
  }
  const children = node.children.map((n) => serializeWithoutDiv(n)).join("");
  if (Element.isElement(node)) {
    switch (node.type) {
      case "heading": {
        return `<p itemID="heading" style="font-family:Courier;padding:0 40px;font-size:18px;margin-bottom:20px;color:black;width:100%;text-transform:uppercase;">${children}</p>`;
      }
      case "action": {
        return `<p itemID="action" style="font-family:Courier;width:100%;padding:0 40px;color:black;margin-bottom:20px;font-size:16px;">${children}</p>`;
      }
      case "character": {
        return `<p itemID="character" style="font-family:Courier;padding:0 40px;margin-bottom:18px;text-align:start;width:60%;text-transform:uppercase;color:black;margin-left:auto;font-size:18px;">${children}</p>`;
      }
      case "dialogue": {
        return `<p itemID="dialogue" style="font-family:Courier;padding:0 40px;margin-bottom:16px;text-align:start;width:70%;color:black;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
      }
      case "parentethical": {
        return `<p itemID="parentethical" style="font-family:Courier;color:black;padding:0 16px;margin-bottom:18px;max-width:50%;width:fit-content;margin-left:auto;margin-right:auto;border-radius:6px;font-size:16px;">${children}</p>`;
      }
      case "transition": {
        return `<p itemID="transition" style="font-family:Courier;margin-bottom:32px; padding:0 40px;color;black;text-align:end;text-transform:uppercase;font-size:18px;">${children}</p>`;
      }
      case "shot": {
        return `<p itemID="shot" style="font-family:Courier;padding:0 40px;margin-bottom:18px;color:black;text-transform:uppercase;font-size:16px;">${children}</p>`;
      }
      case "general": {
        return `<p itemID="general" style="font-family:Courier;margin-bottom:18px;padding:0 40px;color;black;font-size:16px;">${children}</p>`;
      }
      case "paragraph": {
        return `<p style="font-family:Courier;margin-bottom:3px;font-size:16px;">${children}</p>`;
      }
      default:
        return children;
    }
  }
};

export const serializeWithDiv = (
  node: INode | Descendant
): string | undefined => {
  if (Text.isText(node)) {
    const string = escapeHTML(node.text);
    return string;
  }
  const children = node.children.map((n) => serializeWithDiv(n)).join("");
  if (Element.isElement(node)) {
    switch (node.type) {
      case "page": {
        return `<div style="position:relative;margin-top:40px;margin-bottom:30px;margin-left:auto;margin-right:auto;height:842px;padding:30px 56px;background:#fff;">${children}</div>`;
      }
      case "heading": {
        return `<p itemID="heading" style="font-family:Courier;padding:0 40px;font-size:18px;margin-bottom:20px;color:black;width:100%;text-transform:uppercase;">${children}</p>`;
      }
      case "action": {
        return `<p itemID="action" style="font-family:Courier;width:100%;padding:0 40px;color:black;margin-bottom:20px;font-size:16px;">${children}</p>`;
      }
      case "character": {
        return `<p itemID="character" style="font-family:Courier;padding:0 40px;margin-bottom:18px;text-align:start;width:60%;text-transform:uppercase;color:black;margin-left:auto;font-size:18px;">${children}</p>`;
      }
      case "dialogue": {
        return `<p itemID="dialogue" style="font-family:Courier;padding:0 40px;margin-bottom:16px;text-align:start;width:70%;color:black;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
      }
      case "parentethical": {
        return `<p itemID="parentethical" style="font-family:Courier;color:black;padding:0 16px;margin-bottom:18px;max-width:50%;width:fit-content;margin-left:auto;margin-right:auto;border-radius:6px;font-size:16px;">${children}</p>`;
      }
      case "transition": {
        return `<p itemID="transition" style="font-family:Courier;margin-bottom:32px; padding:0 40px;color;black;text-align:end;text-transform:uppercase;font-size:18px;">${children}</p>`;
      }
      case "shot": {
        return `<p itemID="shot" style="font-family:Courier;padding:0 40px;margin-bottom:18px;color:black;text-transform:uppercase;font-size:16px;">${children}</p>`;
      }
      case "general": {
        return `<p itemID="general" style="font-family:Courier;margin-bottom:18px;padding:0 40px;color;black;font-size:16px;">${children}</p>`;
      }
      case "paragraph": {
        return `<p style="font-family:Courier;margin-bottom:3px;font-size:16px;">${children}</p>`;
      }
      default:
        return children;
    }
  }
};
