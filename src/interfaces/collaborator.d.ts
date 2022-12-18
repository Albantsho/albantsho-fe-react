export interface ICollaboratorOrOwnerInformation {
  _id: string;
  fullname: string;
  image: string;
  email: string;
}

export interface ICollaboratorList {
  _id: string;
  author: ICollaboratorOrOwnerInformation;
  collaborators: ICollaboratorOrOwnerInformation[];
}
