import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementBy,
  reset,
  incrementByAsync,
} from "./counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);
  const error = useAppSelector((state) => state.counter.error);

  const dispatch = useAppDispatch();
  const [add, setAdd] = useState(5);
  const [addAsync, setAddAsync] = useState(10);

  return (
    <div>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>

      <span>{count}</span>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <br />
      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
      {status === "Idle" && (
        <p className="status idle">Async Status : {status}</p>
      )}
      {status === "Pending" && (
        <p className="status pending">Async Status : {status}</p>
      )}
      {status === "Success" && (
        <p className="status success">Async Status : {status}</p>
      )}
      {status === "Failure" && (
        <p className="status failure">Async Status : {status}</p>
      )}

      {status === "Success" && <p className="error success">{error}</p>}
      {status === "Failure" && <p className="error failure">{error}</p>}

      <br />
      <input
        type="text"
        name="add"
        id="add"
        value={add}
        onChange={(e) => setAdd(Number(e.target.value))}
      />
      <button type="button" onClick={() => dispatch(incrementBy(add))}>
        Add
      </button>

      <br />
      <input
        type="text"
        name="add-async"
        id="add-async"
        value={addAsync}
        onChange={(e) => setAddAsync(Number(e.target.value))}
      />
      <button
        type="button"
        onClick={() => dispatch(incrementByAsync(addAsync))}
      >
        Add Async
      </button>
      <br />
    </div>
  );
}

export default Counter;
