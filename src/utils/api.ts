import axios from "axios";
import { store } from "../redux/store";
import { refreshTokenRequest } from "/src/redux/auth/authActions"; // Adjust the import path accordingly

// Create an instance of axios with default configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variable for base URL
  timeout: 10000, // Set request timeout to 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer `,
  },
  withCredentials: true,
});

// Request interceptor for attaching tokens
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      // Attach the access token to every request if available
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling token expiration and errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();
    const refreshToken = state.auth.refreshToken;

    // Handle 401 Unauthorized response and refresh token
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;

      // Dispatch the refresh token request action

      try {
        // Wait for the refresh token to complete (this could be a saga effect)
        await store.dispatch<any>(refreshTokenRequest(refreshToken));
        const newAccessToken = store.getState().auth.accessToken;

        // Retry the original request with the new access token
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        // If token refresh fails, handle the error (e.g., logout user)
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
