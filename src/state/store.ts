import {applyMiddleware, combineReducers, createStore} from "redux";
import ScrollReducer from "./scroll/reducer";
import PageReducer from "./page/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    scroll: ScrollReducer,
    page: PageReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore( rootReducer, applyMiddleware(thunk) )