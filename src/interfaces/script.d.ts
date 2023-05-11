export interface IScript {
  _id: string;
  title: string;
  tagline: string;
  price: number;
  reviewerRate: number;
  scriptFormat: string;
  reviewed: boolean;
  image?: string;
  writtenBy: string;
  draftDate: string;
  basedOn: string;
  names: string;
}

export interface IUnlistedScript {
  _id: string;
  title: string;
  tagline: string;
  image: string;
  scriptFormat: string;
}

export interface IUnCompletedScript {
  _id: string;
  title: string;
  tagline: string;
  image: string | null;
  progress: number;
}

export interface IClosedScript {
  _id: string;
  title: string;
  tagline: string;
  image: string;
  soldPrice: number;
  soldDate: string;
}

export interface IWriterScript {
  _id: string;
  title: string;
  tagline: string;
  image: string | null;
  scriptFormat: string | null;
  archive: boolean;
  scriptFileType: "application/pdf" | "text/plain" | null;
}

export interface IBidScript {
  _id: string;
  title: string;
  tagline: string;
  image: string;
  scriptFormat: string;
  numberOfBids: number;
}

export interface IFullInformationScript {
  _id: string;
  authorId: string;
  title: string;
  tagline: string;
  archive: boolean;
  scriptFormat: string;
  storyFormat: string;
  primaryGenre: string;
  secondaryGenre: string;
  primaryCast: string;
  secondaryCast: string;
  estimatedBudget: string;
  logLine: string;
  synopsis: string;
  storyWorld: string;
  actStructure: string;
  characterBible: string;
  adaption: boolean;
  adaptionPermission: string;
  inspiration: string;
  motivation: string;
  image: string;
  draftContentSnippet: string;
  price: string;
  listed: boolean;
  published: boolean;
  storyTopics: string[];
  rate: number;
  rateCount: number;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
  basedOn: null | string;
  collaborators: [];
  contentPdf: string;
  contentSnippet: null | string;
  draftDate: string | null;
  progress: number;
  reviewerRate: number | null;
  sold: boolean;
  soldDate: string | null;
  soldPrice: number | null;
  writtenBy: string;
  scriptSnippet: string | null;
  subScriptions: string[];
  scriptFileType: "application/pdf" | "text/plain" | null;
  names: string;
}

export interface IScriptReviewer {
  authorId: string;
  createdAt: string;
  reviewPlan: string;
  reviewed: boolean;
  reviewerId: string;
  scriptFormat: string;
  title: string;
  totalPages: string;
  _id: string;
}

export interface IAllScriptCollaboratorOn {
  "_id": string,
  "title": string,
  "author": {
    "_id": string,
    "firstName": string,
    "lastName": string,
    "image": string,
    "email": string;
  };
}