export interface IScript {
  _id: string;
  title: string;
  description: string;
  script_price: number;
  rate: number;
  primary_genre: string;
  script_verified: string;
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
  description: string;
  script_image: string;
  primary_genre: string;
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
  theme: string[];
  rate: string;
  rateCount: string;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
}
