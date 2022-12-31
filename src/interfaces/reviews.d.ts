export interface ICurrentRequest {
  _id: string;
  title: string;
  description: string;
  script_image: string;
  review_plan: string;
  primary_genre: string;
}

export interface IAssignedOrCompletedRequest {
  _id: string;
  title: string;
  description: string;
  script_image: string;
  review_plan: string;
  primary_genre: string;
  reviewer: IReviewer;
}

export interface IReviewerTask {
  _id: string;
  title: string;
  description: string;
  script_image: string;
  review_plan: string;
  primary_genre: string;
  rate: number;
  createdAt: string;
  review: {
    _id: string;
    complete: boolean;
  } | null;
}
export interface IWriterReview {
  _id: string;
  title: string;
  description: string;
  image: string;
  reviewed: boolean;
}

export interface IReviewer {
  id: string;
  fullname: string;
}

export interface IReviewTypeA {
  introduction: string;
  plot: string;
  character: string;
  genre_and_story_structure: string;
  dialogue: string;
  story_quality: string;
  suggestions: string;
}

export interface IReviewTypeB {
  introduction: string;
  plot: string;
  character: string;
  genre_and_story_structure: string;
  dialogue: string;
  story_quality: string;
  world_building: string;
  script_formatting: string;
  writer_voice: string;
  authenticity_feedback: string;
  opening_and_closing_image: string;
  suggestions: string;
}
