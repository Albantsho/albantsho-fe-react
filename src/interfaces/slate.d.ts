import { type TypographyProps } from "@mui/system";
import type { BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";
import type { HistoryEditor } from "slate-history";

interface ITypography {
  type: "typography";
  variant?: TypographyProps["variant"];
  children: CustomText[];
}

interface IBlockQuote {
  type: "blockquote";
  children: CustomText[];
}

interface IBulletList {
  type: "bulletList";
  children: IListItem[];
}

interface INumberList {
  type: "numberList";
  children: IListItem[];
}

interface IListItem {
  type: "listItem";
  children: CustomText[];
}

export interface ILink {
  type: "link";
  url?: string;
  email?: string;
  children: CustomText[];
}

export interface IEmail {
  type: "email";
  email: string;
  children: CustomText[];
}

export interface IImage {
  type: "image";
  url: string;
  children: CustomText[];
}
export interface ITable {
  type: "table";
  children: ITableRow[];
}

export interface ITableRow {
  type: "tableRow";
  children: ITableCell[];
}
export interface ITableCell {
  type: "tableCell";
  children: CustomText[];
}

export type CustomElement =
  | ITypography
  | IBlockQuote
  | IImage
  | IBulletList
  | INumberList
  | IListItem
  | ILink
  | ITable
  | ITableRow
  | ITableCell
  | IEmail;

export interface CustomText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  code?: boolean;
}

export type IEditor = BaseEditor & ReactEditor & HistoryEditor;
declare module "slate" {
  interface CustomTypes {
    Editor: IEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
