import { IMarketBidScript } from "./market-bid-script";

export interface IProduct {
  act_structure: string;
  adaptation: boolean;
  adaptation_permission: string;
  all_character_bible: IAll_character_bible[];
  created_at: string;
  estimated_budget: string;
  id: string;
  inspiration: string;
  is_abstract: boolean;
  log_line: string;
  market_bid_script: IMarketBidScript[];
  motivation: string;
  primary_cast: string;
  primary_genre: string;
  script_accepted: boolean;
  script_accepted_time: string;
  script_content: string;
  script_content_html: string;
  script_content_pdf: string;
  script_content_snippet: string;
  script_copy_right: string;
  script_format: string;
  script_id: string;
  script_image: string;
  script_listed: boolean;
  script_market_status: string;
  script_price: number;
  script_published: boolean;
  script_themes: string;
  secondary_cast: string;
  secondary_genre: string;
  story_concept: IStory_concept[];
  story_format: string;
  story_world: string;
  synopsis: string;
  tagline: string;
  title: string;
  updated_at: string;
  user: null | string;
  user_id: string;
  view_subscription: boolean;
}

interface IAll_character_bible {
  character: string;
  id: string;
  script_basic_id: string;
}

interface IStory_concept {
  created_at: string;
  id: string;
  script_basic_id: string;
  themes: string;
  updated_at: string;
}
