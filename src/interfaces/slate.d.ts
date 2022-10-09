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

interface ILink {
  type: "link";
  href: string;
  children: CustomText[];
}

interface IImage {
  type: "image";
  url: string;
  children: CustomText[];
}

export type CustomElement =
  | ITypography
  | ILink
  | IImage
  | IBulletList
  | INumberList
  | IListItem;

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
