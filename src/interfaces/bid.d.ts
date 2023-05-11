export interface IBidForScript {
  _id: string;
  scriptId: string;
  amount: number;
  accepted: boolean;
  rejected: boolean;
  producer: { firstName: string; lastName: string; image: null | string; };
}

export interface IBid {
  _id: string;
  scriptId: string;
  amount: number;
  accepted: boolean;
  rejected: boolean;
  producer: { firstName: string; lastName: string; image: null | string; }[];
}

export interface IProducerBid {
  _id: string;
  amount: number;
  accepted: boolean;
  rejected: boolean;
  createdAt: string;
  producer: {
    firstName: string;
    lastName: string;
    email: string;
    image: null | string;
  }[];
  script: { title: string; tagline: string; image: string; _id: string; };
}

export interface IBidInMarketplace {
  _id: string;
  userId: string;
  scriptId: string;
  amount: number;
  accepted: boolean;
  rejected: boolean;
  createdAt: string;
  updatedAt: string;
}
