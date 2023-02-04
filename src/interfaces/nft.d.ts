export interface INft {
  _id: string;
  userId: string;
  tokenId: string | null;
  walletAddress: string | null;
  transaction: string | null;
}

export interface INftForAdmin {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  nfts: {
    _id: string;
    walletAddress: string;
    tokenId: string;
    transaction: string;
    createdAt: string;
    updatedAt: string;
  }[];
}
