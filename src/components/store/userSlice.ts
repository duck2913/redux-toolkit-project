import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	name: string | undefined;
	age: number | undefined;
	about: string | undefined;
	url: string | undefined;
	color: string | undefined;
}

const initialState: UserState = {
	name: "Minh Duc",
	age: 21,
	about: "Hi, I'm a software engineer",
	url: "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
	color: "#ff9051",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateInfo: (
			state: {
				name: string | undefined;
				age: number | undefined;
				about: string | undefined;
				url: string | undefined;
				color: string | undefined;
			},
			action: PayloadAction<UserState>,
		) => {
			state.name = action.payload.name;
			state.age = action.payload.age;
			state.about = action.payload.about;
			state.url = action.payload.url;
			state.color = action.payload.color;
		},
	},
});

export const { updateInfo } = userSlice.actions;
