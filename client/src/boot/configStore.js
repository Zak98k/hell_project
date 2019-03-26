import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedRedusers from '../reducers';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware=createSagaMiddleware();

export default function confogureStore() {
    const middleware=[
        sagaMiddleware
        /*........*/
    ];
    const store=createStore(combinedRedusers,compose(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga,store.dispatch);
    return store;
}