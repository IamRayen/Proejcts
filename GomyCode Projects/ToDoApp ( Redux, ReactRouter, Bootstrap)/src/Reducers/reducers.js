import { ADD_TODO, DELETE_TODO,EDIT_TODO } from "../Actions/actiontypes";

const initialTodoList = [];

export const todoReducer = (state = initialTodoList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter((x)=>x.id !== action.payload);
        case EDIT_TODO:
            return state.map((x) => action.payload.id === x.id ? {...x,...action.payload} : x )
        default: 
            return state;
    }
};
