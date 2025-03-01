import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { booksReducer } from "./reducers/booksReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    books: booksReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))