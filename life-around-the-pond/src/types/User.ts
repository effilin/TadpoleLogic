export interface User {
  id: number;
  username: string;
  profileImgUrl?: string;
  authLevel: string;
  createdAt: Date;
  updatedAt: Date;
}
