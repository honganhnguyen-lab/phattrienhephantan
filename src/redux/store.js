import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middlewares = [reduxThunk];

// if(ProcessingInstruction.env.NODE_ENV === "developer"){
//     middlewares.push(logger)
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;