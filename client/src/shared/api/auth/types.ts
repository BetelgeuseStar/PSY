export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type User = {
  id: string;
  email: string;
  isActivated: boolean;
};
