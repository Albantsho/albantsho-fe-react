export interface IScript {
  _id: string;
  title: string;
  tagLine: string;
  price: number;
  rate: number;
  primaryGenre: string;
  verified: boolean;
}

export interface IUnlistedScript {
  _id: string;
  title: string;
  tagLine: string;
  image: string;
  scriptFormat: string;
}

export interface IUnCompletedScript {
  _id: string;
  title: string;
  tagLine: string;
  image: string;
  progressPercent: number;
}

export interface IClosedScript {
  _id: string;
  title: string;
  tagLine: string;
  image: string;
  soldPrice: number;
  soldDate: string;
}

export interface IWriterScript {
  _id: string;
  title: string;
  description: string;
  script_image: string;
  primary_genre: string;
  archive: boolean;
}

export interface IBidScript {
  _id: string;
  title: string;
  tagLine: string;
  image: string;
  primaryGenre: string;
  numberOfBids: number;
}

export interface IFullInformationScript {
  _id: string;
  authorId: string;
  title: string;
  tagline: string;
  archived: boolean;
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
  rate: string;
  rateCount: string;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
}
