export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";

export const AUTH_ME_REQUEST = "AUTH_ME_REQUEST";
export const AUTH_ME_SUCCESS = "AUTH_ME_SUCCESS";
export const AUTH_ME_FAILURE = "AUTH_ME_FAILURE";

export const AUTH_SIGNUP_REQUEST = "AUTH_SIGNUP_REQUEST";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_SIGNUP_FAILURE = "AUTH_SIGNUP_FAILURE";

export const AUTH_REFRESH_TOKEN_REQUEST = "AUTH_REFRESH_TOKEN_REQUEST_REQUEST";
export const AUTH_REFRESH_TOKEN_REQUEST_SUCCESS =
  "AUTH_REFRESH_TOKEN_REQUEST_SUCCESS";
export const AUTH_REFRESH_TOKEN_REQUEST_FAILURE =
  "AUTH_REFRESH_TOKEN_REQUEST_FAILURE";

export const loginRequest = (email: string, password: string) => ({
  type: AUTH_LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (
  accessToken: string,
  refreshToken: string,
  role: string
) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: { accessToken, refreshToken, role },
});

export const loginFailure = (error: string) => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (credentials: {
  email: string;
  password: string;
}) => ({
  type: "AUTH_SIGNUP_REQUEST",
  payload: credentials,
});

// Action to request a refresh token
export const refreshTokenRequest = (refreshToken) => ({
  type: AUTH_REFRESH_TOKEN_REQUEST,
  refreshToken,
});

export const refreshTokenSuccess = (
  accessToken: string,
  refreshToken: string,
  role: string,
  user: any
) => ({
  type: AUTH_REFRESH_TOKEN_REQUEST_SUCCESS,
  payload: { accessToken, refreshToken, role, user },
});

// Action for failed token refresh
export const refreshTokenFailure = (error) => ({
  type: AUTH_REFRESH_TOKEN_REQUEST_FAILURE,
  payload: error,
});

export const authMeRequest = () => ({
  type: AUTH_ME_REQUEST,
});

export const authMeSuccess = (
  accessToken: string,
  refreshToken: string,
  role: string
) => ({
  type: AUTH_ME_SUCCESS,
  payload: { accessToken, refreshToken, role },
});

export const authMeFailure = (error: string) => ({
  type: AUTH_ME_FAILURE,
  payload: error,
});
