import { FormEventHandler, useRef, useState } from "react";
import classes from "./EditPage.module.css";

interface Props {
	onCloseEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const avaUrl = [
	"https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
	"https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
	" https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
	"https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
	"https://i.redd.it/7ipyf6pvqac61.png",
	"https://i.redd.it/ksmb0m02ppy51.png",
	" https://i.redd.it/mozfkrjpoa261.png",
	"https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
	"https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
];

function EditPage({ onCloseEdit }: Props) {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const aboutRef = useRef<HTMLTextAreaElement>(null);
	const colorRef = useRef<HTMLInputElement>(null);
	const [selectedUrl, setSelectedUrl] = useState("");

	function selectUrlHandler(url: string) {
		setSelectedUrl(url);
	}

	function submitFormHandler(event: React.FormEvent) {
		event.preventDefault();

		const enteredName = nameRef.current?.value;
		const enteredAge = ageRef.current?.value;
		const enteredAbout = aboutRef.current?.value;
		const enteredColor = colorRef.current?.value;
		const enteredImgUrl = selectedUrl;

		const userInfo = {
			enteredName,
			enteredAge,
			enteredAbout,
			enteredColor,
			enteredImgUrl,
		};
		console.log(userInfo);
	}

	return (
		<form onSubmit={submitFormHandler}>
			<div className={classes["edit-container"]}>
				<button
					className={classes.close}
					onClick={() => {
						onCloseEdit(false);
					}}
				>
					Save
				</button>
				<div className={classes["edit-profile"]}>Edit profile</div>
				<div className={classes["input-container"]}>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" placeholder="Ex: Minh Duc" ref={nameRef} />
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder="20" ref={ageRef} />
					<label htmlFor="about">About</label>
					<textarea
						id="about"
						placeholder="short description of yourself"
						ref={aboutRef}
					/>
				</div>
				<p>Profile picture</p>
				<div className={classes["input-image-container"]}>
					{avaUrl.map((url, index) => (
						<img
							key={index}
							src={url}
							alt=""
							className={classes["input-image"]}
							onClick={() => selectUrlHandler(url)}
						/>
					))}
				</div>
				<div className={classes["theme-container"]}>
					<label htmlFor="theme">Theme</label>
					<input
						type="color"
						name="theme"
						className={classes["theme-color"]}
						ref={colorRef}
					/>
				</div>
			</div>
		</form>
	);
}

export default EditPage;
