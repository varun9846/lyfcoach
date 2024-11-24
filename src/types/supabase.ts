export interface Session {
  user: {
    email?: string;
    id: string;
  } | null;
}

export interface AuthError {
  message: string;
} 