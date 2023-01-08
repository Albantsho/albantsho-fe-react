export interface ICurrentRequest {
  _id: string;
  title: string;
  tagline: string;
  image: string;
  reviewPlan: string;
  primaryGenre: string;
}

export interface IAssignedOrCompletedRequest extends ICurrentRequest {
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
  _id: string;
  firstName: string;
  lastName: string;
  image: null | string;
}

export interface IReviewTypeA {
  introduction: string;
  plot: string;
  character: string;
  genreAndStoryStructure: string;
  dialogue: string;
  storyQuality: string;
  suggestions: string;
}

export interface IReviewTypeB extends IReviewTypeA {
  worldBuilding: string;
  scriptFormattingAndEditing: string;
  writerVoice: string;
  authenticityFeedback: string;
  openingAndClosingImage: string;
}
