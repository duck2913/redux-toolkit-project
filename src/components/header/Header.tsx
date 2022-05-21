import classes from "./Header.module.css";

interface Props {
	onShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ onShowEdit }: Props) {
	return (
		<>
			<header style={{ backgroundImage: "linear-gradient(180deg, #ff9051, #181818)" }}>
				<div className={classes["info-container"]}>
					<button
						className={classes["info-edit"]}
						onClick={() => {
							onShowEdit(true);
						}}
					>
						Edit
					</button>
					<img
						src="https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a"
						alt=""
						className={classes["info-ava"]}
					/>
					<div className={classes["info-age"]}>21</div>
					<div className={classes["info-about"]}>Hi am a developer</div>
				</div>
			</header>
		</>
	);
}

export default Header;
