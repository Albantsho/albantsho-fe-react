export interface IMarketBidScript {
  marketBidScript: {
    accept: boolean;
    active: boolean;
    amount: number;
    created_at: string;
    id: string;
    paid: boolean;
    payment: null | boolean;
    payment_id: string;
    script_basic: null | boolean;
    script_basic_id: string;
    updated_at: string;
    user: IUser;
    user_id: string;
  };
}
