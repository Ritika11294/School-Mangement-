
import { ADD_TEACHERS } from "./action";

const initState = {
   
    teachers: []
}

// reducer function
export const teachersReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_TEACHERS:
         
            return {...store, teachers: payload}

            default: 
            return store;
    }

}