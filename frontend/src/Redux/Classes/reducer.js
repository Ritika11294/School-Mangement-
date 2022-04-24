


import { ADD_CLASSES } from "./action";

const initState = {
    classes: {},
}

// reducer function
export const classesReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_CLASSES:
            // localStorage.setItem("classes", JSON.stringify([...payload]));    
            return {...store, classes: payload }
            default: 
            return store;
    }

}