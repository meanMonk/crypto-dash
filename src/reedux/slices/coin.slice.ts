import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCoins } from 'api';

export interface Coin {
  id: string
  symbol: string
  name: string
}

export interface CoinState {
  loading: boolean
  coins: Array<any>
  error: string
  selectedCoin: Coin | null
}

const initialState: CoinState = {
  loading: false, 
  error: '',
  coins: [],
  selectedCoin: null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchCoinAsync = createAsyncThunk(
  'coin/fetchCoins',
  async () => {
    const response = await fetchCoins();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectCoin: (state, action: PayloadAction<Coin>) => {
      state.selectedCoin = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoinAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = action.payload;
      })
      .addCase(fetchCoinAsync.rejected, (state) => {
        state.loading = false
      });
  },
});

export const { selectCoin } = coinSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCoinList = (state: RootState) => state.coin.coins;
export const selectActiveCoin = (state: RootState) => state.coin.selectedCoin;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCoins(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default coinSlice.reducer;
