import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
	name: "post",
	initialState: {
		posts: [],
	},
	reducers: {
		addPost: (state, action) => {
			state.posts.push({
				title: action.payload.title,
				description: action.payload.description,
				tag: action.payload.tag,
			});
		},
	},
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
