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
  script_image: string;
  reviewed: boolean;
}

export interface IReviewer {
  id: string;
  fullname: string;
}
