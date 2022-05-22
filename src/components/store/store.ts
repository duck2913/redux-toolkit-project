import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import postSliceReducer from "./postSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice.reducer,
		postSlice: postSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
