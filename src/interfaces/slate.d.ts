import type { BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";
import type { HistoryEditor } from "slate-history";

interface IHeadOne {
  type: "headOne";
  children: CustomText[];
}
interface IHeadTwo {
  type: "headTwo";
  children: CustomText[];
}
interface IHeadThree {
  type: "headThree";
  children: CustomText[];
}
interface IHeadFour {
  type: "headFour";
  children: CustomText[];
}
interface IHeadFive {
  type: "headFive";
  children: CustomText[];
}
interface IHeadSix {
  type: "headSix";
  children: CustomText[];
}
interface IParagraph {
  type: "paragraph";
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
  children: CustomText[];
}

export interface IEmail {
  type: "email";
  email: string;
  children: CustomText[];
}

export interface IImage {
  type: "image";
  url: string | ArrayBuffer | null;
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

interface IHeading {
  type: "heading";
  children: CustomText[];
}
interface IAction {
  type: "action";
  children: CustomText[];
}
interface ICharacter {
  type: "character";
  children: CustomText[];
}
interface IDialogue {
  type: "dialogue";
  children: CustomText[];
}
interface IParentethical {
  type: "parentethical";
  children: CustomText[];
}
interface ITransition {
  type: "transition";
  children: CustomText[];
}
interface IShot {
  type: "shot";
  children: CustomText[];
}
interface IGeneral {
  type: "general";
  children: CustomText[];
}

export type CustomElement =
  | IHeadOne
  | IHeadTwo
  | IHeadThree
  | IHeadFour
  | IHeadFive
  | IHeadSix
  | IParagraph
  | IBlockQuote
  | IImage
  | IBulletList
  | INumberList
  | IListItem
  | ILink
  | ITable
  | ITableRow
  | ITableCell
  | IEmail
  | IHeading
  | IAction
  | ICharacter
  | IDialogue
  | IParentethical
  | ITransition
  | IShot
  | IGeneral;

export interface CustomText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  code?: boolean;
  heading?: boolean;
}

export type IEditor = BaseEditor & ReactEditor & HistoryEditor;
declare module "slate" {
  interface CustomTypes {
    Editor: IEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
