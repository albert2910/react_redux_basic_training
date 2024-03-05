import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {countActions} from "../store/counter";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch();
    const showCounter = useSelector((state) => state.counter.showCounter);


    const toggleCounterHandler = () => {
        dispatch(countActions.toggleCounter());
    };

    const incrementHandler = () => {
        dispatch(countActions.increment());
    }

    const decrementHandler = () => {
        dispatch(countActions.decrement());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {!showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
