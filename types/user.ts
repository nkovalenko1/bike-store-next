export interface User {
  id: string;
  email: string;
  name: string | null;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
}

