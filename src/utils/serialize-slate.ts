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
        return `<p itemID="heading" style="font-family:Courier;padding:0 40px;font-size:18px;margin-bottom:18px;color:black;width:100%;text-transform:uppercase;">${children}</p>`;
      }
      case "action": {
        return `<p itemID="action" style="font-family:Courier;width:100%;padding:0 40px;color:black;margin-bottom:18px;font-size:16px;">${children}</p>`;
      }
      case "character": {
        return `<p itemID="character" style="font-family:Courier;padding:0 40px;margin-bottom:16px;text-align:start;width:60%;text-transform:uppercase;color:black;margin-left:auto;font-size:18px;">${children}</p>`;
      }
      case "dialogue": {
        return `<p itemID="dialogue" style="font-family:Courier;padding:0 40px;margin-bottom:14px;text-align:start;width:70%;color:black;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
      }
      case "parentethical": {
        return `<p itemID="parentethical" style="font-family:Courier;color:black;padding:0 16px;margin-bottom:16px;max-width:50%;margin-left:auto;margin-right:auto;font-size:16px;">${children}</p>`;
      }
      case "transition": {
        return `<p itemID="transition" style="font-family:Courier;margin-bottom:26px; padding:0 40px;color:black;text-align:end;text-transform:uppercase;font-size:18px;width:100%;"><span style="width:fit-content; margin-left:auto; text-align: right; ">${children}</span></p>`;
      }
      case "shot": {
        return `<p itemID="shot" style="font-family:Courier;padding:0 40px;margin-bottom:16px;color:black;text-transform:uppercase;font-size:16px;">${children}</p>`;
      }
      case "general": {
        return `<p itemID="general" style="font-family:Courier;margin-bottom:16px;padding:0 40px;color:black;font-size:16px;">${children}</p>`;
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
        return `<div style="height:842px;padding:36px 24px; background:#fff; width:100%;">${children}</div>`;
      }
      case "heading": {
        return `<p itemID="heading" style="font-family:Courier; padding:0 40px;font-size:18px; margin-bottom:18px; color:black; width:100%; text-transform:uppercase;">${children}</p>`;
      }
      case "action": {
        return `<p itemID="action" style="font-family:Courier; width:100%; padding:0 40px; color:black; margin-bottom:20px; font-size:16px;">${children}</p>`;
      }
      case "character": {
        return `<p itemID="character" style="font-family:Courier; padding:0 40px; margin-bottom:18px; text-align:start; width:60%; text-transform:uppercase; color:black; margin-left:auto; font-size:16px;">${children}</p>`;
      }
      case "dialogue": {
        return `<p itemID="dialogue" style="font-family:Courier; padding:0 40px; margin-bottom:16px; text-align:start; width:70%; color:black; margin-left:auto; margin-right:auto; font-size:16px;">${children}</p>`;
      }
      case "parentethical": {
        return `<p itemID="parentethical" style="font-family:Courier; color:black; padding:0 16px; margin-bottom:16px; max-width:50%; margin-left:auto; margin-right:auto; font-size:16px;"><span style="width:fit-content; margin-left:auto; text-align: right;">${children}</span></p>`;
      }
      case "transition": {
        return `<p itemID="transition" style="font-family:Courier; margin-bottom:26px; padding:0 40px; color:black; text-align:end; text-transform:uppercase; font-size:18px; width:100%;">${children}</p>`;
      }
      case "shot": {
        return `<p itemID="shot" style="font-family:Courier; padding:0 40px; margin-bottom:16px; color:black; text-transform:uppercase; font-size:16px;">${children}</p>`;
      }
      case "general": {
        return `<p itemID="general" style="font-family:Courier; margin-bottom:16px; padding:0 40px; color:black; font-size:16px;">${children}</p>`;
      }
      case "paragraph": {
        return `<p style="font-family:Courier;margin-bottom:3px;font-size:16px;">${children}</p>`;
      }
      default:
        return children;
    }
  }
};

export const serializeRichTextEditorValue = (
  node: INode | Descendant
): string | undefined => {
  if (Text.isText(node)) {
    let string = escapeHTML(node.text);
    if (node.bold && node.underline && node.italic && node.code) {
      string = `<code style="color:${node.color};"><u><em><strong>${string}</strong></em></u></code>`;
    } else if (node.bold && node.underline && node.italic) {
      string = `<u style="color:${node.color};"><em><strong>${string}</strong></em></u>`;
    } else if (node.bold && node.underline && node.code) {
      string = `<code style="color:${node.color};"><u><strong>${string}</strong></u></code>`;
    } else if (node.bold && node.italic && node.code) {
      string = `<code style="color:${node.color};"><em><strong>${string}</strong></em></code>`;
    } else if (node.underline && node.italic && node.code) {
      string = `<code style="color:${node.color};"><u><em>${string}</em></u></code>`;
    } else if (node.underline && node.code) {
      string = `<code style="color:${node.color};"><u>${string}</u></code>`;
    } else if (node.italic && node.code) {
      string = `<code style="color:${node.color};"><em>${string}</em></code>`;
    } else if (node.bold && node.code) {
      string = `<code style="color:${node.color};"><strong>${string}</strong></code>`;
    } else if (node.italic && node.underline) {
      string = `<u style="color:${node.color};"><em>${string}</em></u>`;
    } else if (node.bold && node.underline) {
      string = `<u style="color:${node.color};"><strong>${string}</strong></u>`;
    } else if (node.bold && node.italic) {
      string = `<em style="color:${node.color};"><strong>${string}</strong></em>`;
    } else if (node.bold) {
      string = `<strong style="color:${node.color};">${string}</strong>`;
    } else if (node.underline) {
      string = `<u style="color:${node.color};">${string}</u>`;
    } else if (node.code) {
      string = `<code style="color:${node.color};">${string}</code>`;
    } else if (node.italic) {
      string = `<em style="color:${node.color};">${string}</em>`;
    }

    return string;
  }

  const children = node.children
    .map((n) => serializeRichTextEditorValue(n))
    .join("");
  if (Element.isElement(node)) {
    switch (node.type) {
      case "blockquote": {
        const color = node.children.map((node) => node.color);
        return `<blockquote style="border-left-width:4px;padding:6px 2px;border-radius: 2px;color:${color[0]};">${children}</blockquote>`;
      }
      case "headOne": {
        const color = node.children.map((node) => node.color);
        return `<h1 style="font-size:36px;color:${color[0]};">${children}</h1>`;
      }
      case "headTwo": {
        const color = node.children.map((node) => node.color);
        return `<h2 style="font-size:30px;color:${color[0]};">${children}</h2>`;
      }
      case "headThree": {
        const color = node.children.map((node) => node.color);
        return `<h3 style="font-size:26px;color:${color[0]};">${children}</h3>`;
      }
      case "headFour": {
        const color = node.children.map((node) => node.color);
        return `<h4 style="font-size:24px;color:${color[0]};">${children}</h4>`;
      }
      case "headFive": {
        const color = node.children.map((node) => node.color);
        return `<h5 style="font-size:22px;color:${color[0]};">${children}</h5>`;
      }
      // case "headSix": {
      //   const color = node.children.map((node) => node.color);
      //   return `<h6 style="font-size:20px;color:${color[0]};">${children}</h6>`;
      // }
      case "paragraph": {
        const color = node.children.map((node) => node.color);
        return `<p style="font-size:16px;color:${color[0]};">${children}</p>`;
      }
      case "numberList": {
        return `<ol style="list-style-type:decimal;list-style-position:inside;">${children}</ol>`;
      }
      case "bulletList":
        return `<ul style="list-style-type:disc;list-style-position:inside;">${children}</ul>`;
      case "listItem": {
        const color = node.children.map((node) => node.color);
        return `<li style="color:${color};" >${children}</li>`;
      }
      case "email": {
        const color = node.children.map((node) => node.color);
        return `<a target="_blank" style="text-decoration-line:underline;text-decoration-color:${color};color:${color};" href="mailto:${escapeHTML(
          node.email
        )}">${children}</a>`;
      }
      case "link": {
        const color = node.children.map((node) => node.color);
        return `<a target="_blank" style="text-decoration-line:underline;text-decoration-color:${color};color:${color};" href="${escapeHTML(
          node.url
        )}">${children}</a>`;
      }
      case "table": {
        return `<div style="overflow: auto;-ms-overflow-style:none;scrollbar-width:none;display:flex;"><table style="border-collapse:collapse;flex:1 1 0%;"><tbody>${children}</tbody></table></div>`;
      }
      case "tableRow": {
        return `<tr>${children}</tr>`;
      }
      case "tableCell": {
        const color = node.children.map((node) => node.color);
        return `<td style="border-width:2px;border-radius:6px;text-align:start;vertical-align:top;padding:8px 16px;min-width:200px;max-width:320px;color:${color[0]};">${children}</td>`;
      }
      case "image": {
        return `<img style="width:fit-content;height:auto;"
        alt="" src="${escapeHTML(node.url as string)}" />`;
      }
      default:
        return children;
    }
  }
};
