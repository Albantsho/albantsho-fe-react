export interface IComment {
  createdAt: string;
  mention: string;
  message: string;
  parentId: string | null;
  positionX: number;
  positionY: number;
  scriptId: string;
  updatedAt: string;
  userId: string;
  _id: string;
  user?: {
    email: string;
    firstName: string;
    lastName: string;
    image: string | null;
  };
}
