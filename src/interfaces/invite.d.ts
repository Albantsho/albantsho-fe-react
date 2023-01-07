export interface IInvite {
  _id: string;
  script: { _id: string; title: string };
  inviter: { firstName: string; lastName: string };
  rejected: boolean;
  accepted: boolean;
  createdAt: string;
  updatedAt: string;
}
