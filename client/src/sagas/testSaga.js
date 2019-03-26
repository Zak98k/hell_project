import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {auth} from "../api/rest/restContoller";

export function* sayHelloWorker({str}) {
    yield put({type: ACTION.AUTH_REQUEST});
    yield test; //TODO CALL API
    yield put({type: ACTION.AUTH_ERROR, error: new Error("Hello")});
}

const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});