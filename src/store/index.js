import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// const counterReducer = (state = initialCounter, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }
//     return state;
// }

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export default store;