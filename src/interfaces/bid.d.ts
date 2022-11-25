interface IBidForScript {
  _id: string;
  userId: string;
  scriptId: string;
  amount: string;
  accept: boolean;
  reject: boolean;
  active: boolean;
  expired: boolean;
  paid: boolean;
  createdAt: string;
  updatedAt: string;
}
