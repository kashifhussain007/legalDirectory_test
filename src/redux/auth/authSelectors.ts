// src/redux/auth/authSelectors.ts

import { RootState } from "../store"; // Adjust the import based on your project structure

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) =>
  selectAuthState(state).isAuthenticated;

export const selectLoading = (state: RootState) =>
  selectAuthState(state).loading;

export const selectAuthMeLoading = (state: RootState) =>
  selectAuthState(state).authMeLoading;

export const selectAccessToken = (state: RootState) =>
  selectAuthState(state).accessToken;

export const selectRefreshToken = (state: RootState) =>
  selectAuthState(state).refreshToken;

export const selectRole = (state: RootState) => selectAuthState(state).role;

export const selectError = (state: RootState) => selectAuthState(state).error;
