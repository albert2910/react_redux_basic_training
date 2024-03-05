import {createSlice} from "@reduxjs/toolkit";

const initialCounter = {counter: 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
export const countActions = counterSlice.actions;
export default counterSlice;