import { updateStart, updateError, updateSuccess } from "./userSlice";

const updateUser = async function (userInfo, dispatch) {
	dispatch(updateStart());
	dispatch(updateSuccess(userInfo));
};

export default updateUser;
