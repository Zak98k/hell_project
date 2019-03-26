import { combineReducers } from 'redux';
import reducers from './redusers';

const appReducer = combineReducers({
 reducers
});

const rootReducer=(state, action)=>{
 return appReducer(state, action);
};

export default rootReducer;
