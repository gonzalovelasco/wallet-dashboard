export type SetFavoriteDto = {
  userId: string;
  walletId: number;
};

export type UserDto = {
  id: string;
  email: string;
  name: string;
};

export type WalletDto = {
  id: number;
  address: string;
  createdAt: Date;
  firstTransaction: Date | null;
};

export type ExchangeRateDto = {
  id: number;
  currency: string;
  toCurrency: string;
  rate: number;
  lastUpdated: Date;
};
