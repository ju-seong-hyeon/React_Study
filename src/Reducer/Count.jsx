import React, {useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case "INCREMENT":
            return {count : state.count + action.payload};
        case "DECREMENT":
            return {count : state.count - action.payload};
        default:
            throw new Error("unsupported action type : ", action.type);
    }
}

function Count(){
    const initialState = {count : 0}
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick = {() => dispatch({type : "INCREMENT", payload : 1})}> 증가 </button>
            <button onClick = {() => dispatch({type : "DECREMENT", payload : 1})}> 감소 </button>
        </div>
    );
}
export default Count