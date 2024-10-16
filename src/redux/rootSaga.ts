import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/authSaga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    // , fork(userSaga), fork(notificationsSaga)
  ]); // All sagas run independently
}
