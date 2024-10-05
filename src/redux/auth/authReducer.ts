import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_ME_REQUEST,
  AUTH_ME_SUCCESS,
  AUTH_ME_FAILURE,
  AUTH_REFRESH_TOKEN_REQUEST_SUCCESS,
  AUTH_REFRESH_TOKEN_REQUEST,
  AUTH_REFRESH_TOKEN_REQUEST_FAILURE,
} from "./authActions";
import { AuthState } from "./types";

const initialState: AuthState = {
  loading: false,
  user: null,
  authMeLoading: true,
  accessToken: null,
  refreshToken: null,
  role: null, // <-- Initialize role to null
  error: null,
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AUTH_ME_REQUEST:
      return {
        ...state,
        authMeLoading: true,
        error: null,
      };
    case AUTH_REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        authMeLoading: true,
        error: null,
      };
    case AUTH_ME_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        user: action.payload.user,
        authMeLoading: false,
      };
    case AUTH_REFRESH_TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        user: action.payload.user,
        authMeLoading: false,
      };
    case AUTH_ME_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        authMeLoading: false,
      };
    case AUTH_REFRESH_TOKEN_REQUEST_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        authMeLoading: false,
      };
    case AUTH_LOGIN_REQUEST:
      return { ...state, loading: true };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        authMeLoading: false,

        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        user: action.payload.user,
      };

    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
