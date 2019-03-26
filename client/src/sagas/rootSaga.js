import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
//import * as testSaga from './testSaga';
import * as userSaga from './userSaga';


function* rootSaga() {
  //yield takeLatest(ACTION.SAY_HELLO_ACTION, testSaga.sayHelloWorker);
  yield takeLatest(ACTION.AUTH_ACTION, userSaga.auth);
}
export default rootSaga;