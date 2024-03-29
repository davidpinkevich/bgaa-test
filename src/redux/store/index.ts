import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../slices";

const store = configureStore({
  reducer: { cardsReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
