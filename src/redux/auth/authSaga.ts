import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import api from "../../utils/api";

import { setRefreshToken, getRefreshToken } from "/src/utils/cookie";
import {
  loginService,
  signupService,
  refreshAccessToken,
  authMeService,
} from "../../services/authService";
import {
  loginSuccess,
  loginFailure,
  AUTH_SIGNUP_REQUEST,
  AUTH_LOGIN_REQUEST,
  AUTH_REFRESH_TOKEN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_ME_REQUEST,
  authMeFailure,
  refreshTokenSuccess,
  refreshTokenFailure,
} from "./authActions";

function* handleAuthMe() {
  try {
    const res = yield call(authMeService());

    if (res?.accessToken) {
      // yield put(authMeSuccess(res?.accessToken, res?.refreshToken, role,user));
    } else {
      yield put(authMeFailure(error.message));
    }
  } catch (error) {
    console.log("error", error);
    yield put(authMeFailure(error.message));

    if (error.response?.status === 401) {
      // Refresh token logic can go here if needed
      // const state = store.getState();
      // const refreshToken = state.auth.refreshToken;
      // if (refreshToken) {
      //   try {
      //     const newTokens = yield call(refreshAccessToken, refreshToken);
      //     yield put(
      //       authMeSuccess(
      //         newTokens.accessToken,
      //         newTokens.refreshToken,
      //         newTokens.role
      //       )
      //     );
      //   } catch (error) {
      //     console.log("error", error);
      //     yield put(authMeFailure("Token refresh failed"));
      //   }
      // }
    } else {
      yield put(authMeFailure(error.message));
    }
  }
}

function* handleLogin(action: any) {
  try {
    const { email, password } = action.payload;
    const res = yield call(loginService, email, password);
    res;

    if (res.success) {
      yield put(
        loginSuccess(
          res.data.accessToken,
          res.data.refreshToken,
          // res.data.role
          "admin",
          res.data.user
        )
      );
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.accessToken}`;
      setRefreshToken(res.data.refreshToken);
      const role = res.data.role;
    }
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error.message));
  }
}

function* signupSaga(action: ReturnType<typeof signupRequest>) {
  try {
    const response = yield call(signupService, action.payload);
    yield put({ type: "SIGNUP_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "SIGNUP_FAILURE", payload: error.message });
  }
}

function* handleRefreshToken(action: { type: string; refreshToken: string }) {
  try {
    const res = yield call(refreshAccessToken, action.refreshToken);

    if (res.success) {
      yield put(
        refreshTokenSuccess(
          res.data.accessToken,
          res.data.refreshToken,
          // res.data.role
          res.data.role,
          res.data.user
        )
      );
    } else {
      yield put(refreshTokenFailure(res.message));
    }
  } catch (error) {
    console.log(error);
    yield put(refreshTokenFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(AUTH_ME_REQUEST, handleAuthMe);
  yield takeLatest(AUTH_LOGIN_REQUEST, handleLogin);
  yield takeLatest(AUTH_SIGNUP_REQUEST, signupSaga);
  yield takeEvery(AUTH_REFRESH_TOKEN_REQUEST, handleRefreshToken);
}
