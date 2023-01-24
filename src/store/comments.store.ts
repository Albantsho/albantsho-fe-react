import { IComment } from "interfaces/comment";
import create from "zustand";

interface ICommentsState {
  comments: IComment[];
  getComments: (comments: IComment[]) => void;
  addNewComment: (comment: IComment) => void;
}

const useCommentStore = create<ICommentsState>()((set) => ({
  comments: [],
  getComments: (comments: IComment[]) =>
    set((state) => ({ ...state, comments })),
  addNewComment: (comment) =>
    set((state) => ({
      ...state,
      comments: [...state.comments, comment],
    })),
}));

export default useCommentStore;
