import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  status: "Idle" | "Pending" | "Success" | "Failure";
  error: null | string;
}

const initialState: CounterState = { value: 0, status: "Idle", error: null };

export const incrementByAsync = createAsyncThunk(
  "counter/incrementByAsync",
  async (n: number) => {
    let pro = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 10) % 2) resolve(n);
        else reject("Error - Promise was randomly rejected. Try again.");
      }, 2000);
    });

    return pro;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
      state.error = null;
      state.status = "Idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementByAsync.pending, (state) => {
        state.status = "Pending";
        state.error = "";
      })
      .addCase(incrementByAsync.fulfilled, (state, action) => {
        state.status = "Success";
        state.value += action.payload as number;
        state.error = "Try Add Async again. It might fail.";
      })
      .addCase(incrementByAsync.rejected, (state, action) => {
        state.status = "Failure";
        state.error = action.error.message as string;
      });
  },
});

export const { increment, decrement, incrementBy, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
