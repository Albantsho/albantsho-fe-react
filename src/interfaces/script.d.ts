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
  description: string;
  script_type: string;
  front_page: string;
  archived: boolean;
  content: string;
  page_title: string;
  by_line: string;
  based_on: string;
  copyright: string;
  content_info: string;
  cover_page: string;
  scriptFormat: string;
  storyFormat: string;
  primary_genre: string;
  secondary_genre: string;
  primary_cast: string;
  secondary_cast: string;
  estimated_budget: string;
  log_line: string;
  synopsis: string;
  story_world: string;
  act_structure: string;
  character_bible: string;
  adaption: boolean;
  adaption_permission: string;
  inspiration: string;
  motivation: string;
  script_image: string;
  script_content: string;
  script_content_snippet: string;
  script_content_html: string;
  script_content_pdf: string;
  script_copy_right: string;
  script_price: string;
  script_listed: boolean;
  script_verified: boolean;
  script_verified_time: string;
  script_published: string;
  script_market_status: string;
  is_abstract: boolean;
  script_themes: string;
  view_subscription: string;
  market: boolean;
  rate: string;
  rate_count: string;
  theme: string[];
  subScriptions: string;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
}
