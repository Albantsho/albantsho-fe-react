export interface IDraft {
  _id: string;
  authorId: string;
  scriptId: string;
  title: string;
  description: string;
  script_type: string;
  front_page: string;
  archived: boolean;
  page_title: string;
  by_line: string;
  based_on: string;
  copyright: string;
  content_info: string;
  cover_page: string;
  collaborators: string[];
  createdAt: string;
  updatedAt: string;
}
