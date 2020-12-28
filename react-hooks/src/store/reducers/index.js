export default function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "login":
            return { ...state, user: action.payload };
        case "numberMulti7":
            return { ...state, number: state.number * 7 };
        case "numberDividir25":
            return { ...state, number: state.number / 25 };
        case "numberParser":
            return { ...state, number: parseInt(state.number) };
        default:
            return state;
    }
}