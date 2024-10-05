export interface AuthState {
  loading: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  role: string | null; // <-- Add role here
  error: string | null;
}
