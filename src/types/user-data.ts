export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type ShortUserData = {
  email: string | null;
  avatarUrl: string | null;
}

export type FullUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

