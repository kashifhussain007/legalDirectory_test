import axios from "../utils/api";

export const loginService = async (email: string, password: string) => {
  const response = await axios.post("/auth/login", { email, password });
  return response.data;
};

export const authMeService = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};
export const signupService = async (signupData) => {
  const response = await axios.post("/auth/signup", signupData);
  return {
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
    role: response.data.role, // <-- Return role from API
  };
};

export const refreshAccessToken = async (refreshToken: string) => {
  const response = await axios.post("/auth/refresh-token", {
    refreshToken: refreshToken,
  });
  return response.data; // { accessToken, refreshToken, role }
};
