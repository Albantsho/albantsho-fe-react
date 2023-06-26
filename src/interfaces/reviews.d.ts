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
  basedOn: string;
  draftDate: string;
  writtenBy: string;
  _id: string;
  title: string;
  tagline: string;
  image: string;
  reviewPlan: string;
  primaryGenre: string;
  rate: number;
  createdAt: string;
  review: [{ completed: boolean; rate: number; }] | [];
  names: string;
  scriptFileType: "application/pdf" | "text/plain" | "application/octet-stream" | null;
  scriptIsUploaded: boolean;
}
export interface IWriterReview {
  _id: string;
  title: string;
  tagline: string;
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

export interface IReviewValuesTypeA extends IReviewTypeA {
  _id: string;
  completed: boolean;
  rate: number | null;
}

export interface IReviewValuesTypeB extends IReviewTypeB {
  _id: string;
  completed: boolean;
  rate: number | null;
}
