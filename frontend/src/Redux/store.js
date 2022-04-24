import {combineReducers, createStore} from "redux"

//  import { reducer } from "./Login/reducer";
 import {teachersReducer} from "./Teacher/reducer";
  import {classesReducer} from "./Classes/reducer";
  import {reducer} from  "../Redux/Login/reducer"



const rootReducer = combineReducers({
    // admin: reducer,
    teachers: teachersReducer,
     classes: classesReducer,
     reducer: reducer
});

export const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());