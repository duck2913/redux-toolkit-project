import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
	reducer: {
		userInfo: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
