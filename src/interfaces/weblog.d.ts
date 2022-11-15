import { CustomElement } from "./slate";

export interface IWeblog {
  _id: string;
  authorId?: string;
  title: string;
  description: string;
  content: CustomElement[];
  media: string;
  createdAt: string;
  updatedAt: string;
}
