import Cookies from "js-cookie";

export const setRefreshToken = (token: string) => {
  Cookies.set("refreshToken", token, {
    // httpOnly: true, // Prevents access from JavaScript
    secure: process.env.NODE_ENV === "production", // Only set secure in production
    sameSite: "Strict",
  });
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get("refreshToken");
};

export const removeRefreshToken = () => {
  Cookies.remove("refreshToken");
};
