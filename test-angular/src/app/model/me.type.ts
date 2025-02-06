export type MeResponse = {
  message: string;
  user: {
    _id: string;
    name: string;
    email: string;
    organizations: string[];
  };
};