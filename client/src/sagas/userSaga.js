import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {authentication} from "../api/rest/restContoller";

//import axios from 'axios';


export function* auth(action) {
    /*
        yield put({type: ACTION.AUTH_REQUEST});
        try {

            const {data} = yield authentication(action.data);
            yield put({type: ACTION.AUTH_RESPONSE, data});
        } catch (e) {
            console.log(" ACTION.AUTH_RESPONSE catch - " )

        }
        yield put({type: ACTION.AUTH_ERROR})
    */

    yield put({type: ACTION.AUTH_REQUEST});
    try {
    const {data} = yield authentication(action.data);

        yield put({type: ACTION.AUTH_RESPONSE, data});
    } catch (error){

        yield put({type: ACTION.AUTH_ERROR,error});
    }


}


