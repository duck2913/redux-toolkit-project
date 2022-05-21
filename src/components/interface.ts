interface UserState {
	name: string;
	age: number;
	about: string;
	url: string;
	color: string;
}

export default interface RootState {
	user: UserState;
}
