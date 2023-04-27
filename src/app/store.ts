import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import coinReducer from 'reedux/slices/coin.slice';

export const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
