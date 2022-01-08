import {all} from 'redux-saga/effects';
import users from "../reducers/users";
import userSaga from "./userSaga";

export default function* rootSaga(){
    yield all([
        userSaga(),
    ])
}

