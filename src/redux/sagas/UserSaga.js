import agent from "../../agent";
import { takeLatest, put, call, fork } from "redux-saga/effects";
import {
  getAllUsers,
  setAllUsers
} from "../slices/UserSlice";

function* getAllUser() {
  const response = yield call(agent.User.getUsers);
  if(response){
    yield put(setAllUsers(response));
  }
}

function* users() {
  yield takeLatest(getAllUsers.type, getAllUser);
}

export const userSaga = [fork(users)];
