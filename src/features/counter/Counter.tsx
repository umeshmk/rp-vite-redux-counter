import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementBy, reset } from "./counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>{count}</h3>
      <button type="button" onClick={() => dispatch(increment())}>
        Increament
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={() => dispatch(decrement())}>
        Decreament
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={() => dispatch(incrementBy(5))}>
        Add 5
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
