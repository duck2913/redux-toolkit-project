import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { RootState } from "../../components/store/store";

interface Props {
	onShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ onShowEdit }: Props) {
	const userInfo = useSelector((state: RootState) => state.userInfo);
	return (
		<>
			<header
				style={{ backgroundImage: `linear-gradient(180deg, ${userInfo.color}, #181818)` }}
			>
				<div className={classes["info-container"]}>
					<button
						className={classes["info-edit"]}
						onClick={() => {
							onShowEdit(true);
						}}
					>
						Edit
					</button>
					<img src={userInfo.url} alt="" className={classes["info-ava"]} />
					<div className={classes["info-name"]}>{userInfo.name}</div>
					<div className={classes["info-age"]}>{userInfo.age}</div>
					<div className={classes["info-about"]}>{userInfo.about}</div>
				</div>
			</header>
		</>
	);
}

export default Header;
