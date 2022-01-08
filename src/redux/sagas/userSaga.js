import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi(){
    const response = axios.get(apiUrl).catch((err)=>{
        console.log("err",err);
    })
    return response.data;
    // console.log(response)
}
function* fetchUsers(action){
    try{
        const users = yield call(getApi);
        yield put({type : 'GET_USERS_SUCCESS',users:users});
     }catch(e){
        yield put({type:'GET_USERS_FAILED',message:e.message});
    }
}
function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED',fetchUsers);
}
export default userSaga;