const State = {
    counter: 0,
    price: 500,
}

const rootReducer = (state = State, action) => {
    if (action.type === "inc") {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    } else if (state.counter > 0) {
        if (action.type === "dec") {
            return {
                ...state,
                counter: state.counter - action.value,
            }
        }


    } else {
        return state;
    }

}

export default rootReducer;
