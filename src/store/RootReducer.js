import { combineReducers } from "redux";
import LoaderReducer from './Loader/LoaderReducer';

const RootReducer = combineReducers({
    LoaderReducer: LoaderReducer
});

export default RootReducer;