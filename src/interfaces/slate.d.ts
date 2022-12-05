import type { BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";
import type { HistoryEditor } from "slate-history";
interface IHeadOne {
  type: "headOne";
  style?: object;
  children: CustomText[];
}
interface IHeadTwo {
  type: "headTwo";
  style?: object;
  children: CustomText[];
}
interface IHeadThree {
  type: "headThree";
  style?: object;
  children: CustomText[];
}
interface IHeadFour {
  type: "headFour";
  style?: object;
  children: CustomText[];
}
interface IHeadFive {
  type: "headFive";
  style?: object;
  children: CustomText[];
}
// interface IHeadSix {
//   type: "headSix";
//   style?: object;
//   children: CustomText[];
// }
interface IParagraph {
  type: "paragraph";
  style?: object;
  children: CustomText[];
}

interface IBlockQuote {
  type: "blockquote";
  style?: object;
  children: CustomText[];
}

interface IBulletList {
  type: "bulletList";
  style?: object;
  children: IListItem[];
}

interface INumberList {
  type: "numberList";
  style?: object;
  children: IListItem[];
}

interface IListItem {
  type: "listItem";
  style?: object;
  children: CustomText[];
}

export interface ILink {
  type: "link";
  url: string;
  style?: object;
  children: CustomText[];
}

export interface IEmail {
  type: "email";
  email: string;
  style?: object;
  children: CustomText[];
}

export interface IImage {
  type: "image";
  url: string | ArrayBuffer | null;
  style?: object;
  children: CustomText[];
}
export interface ITable {
  type: "table";
  style?: object;
  children: ITableRow[];
}

export interface ITableRow {
  type: "tableRow";
  style?: object;
  children: ITableCell[];
}
export interface ITableCell {
  type: "tableCell";
  style?: object;
  children: CustomText[];
}

interface IHeading {
  type: "heading";
  id?: string;
  children: CustomText[];
}
interface IAction {
  type: "action";
  id?: string;
  children: CustomText[];
}
interface ICharacter {
  type: "character";
  id?: string;
  children: CustomText[];
}
interface IDialogue {
  type: "dialogue";
  id?: string;
  children: CustomText[];
}

interface IParentethical {
  type: "parentethical";
  id?: string;
  children: CustomText[];
}
interface ITransition {
  type: "transition";
  id?: string;
  children: CustomText[];
}
interface IShot {
  type: "shot";
  id?: string;
  children: CustomText[];
}
interface IGeneral {
  type: "general";
  id?: string;
  children: CustomText[];
}
interface IPage {
  type: "page";
  children:
    | IHeading[]
    | IAction[]
    | ICharacter[]
    | IDialogue[]
    | IParentethical[]
    | ITransition[]
    | IShot[]
    | IGeneral[]
    | IParagraph[]
    | IHeadOne[];
}

export type CustomElement =
  | IHeadOne
  | IHeadTwo
  | IHeadThree
  | IHeadFour
  | IHeadFive
  // | IHeadSix
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
  | IGeneral
  | IPage;

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
