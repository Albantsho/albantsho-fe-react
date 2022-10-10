import { type TypographyProps } from "@mui/system";

interface ITypography {
  type: "typography";
  variant?: TypographyProps["variant"];
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
  url: string;
  children: CustomText[];
}

export interface IImage {
  type: "image";
  url: string;
  children: CustomText[];
}

export type CustomElement =
  | ITypography
  | IImage
  | IBulletList
  | INumberList
  | IListItem
  | ILink;

export interface CustomText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  code?: boolean;
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
