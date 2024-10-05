import jwtDecode from "jwt-decode";

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
export const decodeToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};

// Utility to check if the token is expired
export const isTokenExpired = (token: string): boolean => {
  const decodedToken: any = decodeToken(token);
  if (!decodedToken || !decodedToken.exp) return true;
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};
