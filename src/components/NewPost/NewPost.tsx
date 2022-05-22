import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./NewPost.module.css";
import { addPost } from "../store/postSlice";

interface Props {
	onSaveNewPost: () => void;
}
const tags = ["NSFW", "Mood", "Quotes", "Shitpost", "None"];

function NewPost({ onSaveNewPost }: Props) {
	//useState and useRef
	const [selectedTag, setSelectedTag] = useState<string>("");
	const titleRef = useRef<HTMLTextAreaElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	// redux
	const dispatch = useDispatch();
	// Functional Component
	function savePostInfoHandler() {
		const title = titleRef.current.value;
		const description = descriptionRef.current.value;
		const tag = selectedTag;
		const postInfo = {
			title,
			description,
			tag,
		};
		dispatch(addPost(postInfo));
		onSaveNewPost();
	}

	return (
		<div className={classes["newpost-container"]}>
			<div className={classes["newpost-navigation"]}>
				<button className={classes["newpost-save"]} onClick={savePostInfoHandler}>
					Save
				</button>
			</div>
			<label htmlFor="title">Title</label>
			<textarea id="title" placeholder="Your title..." ref={titleRef} />
			<label htmlFor="desc">Description</label>
			<textarea id="desc" placeholder="Your description..." ref={descriptionRef} />
			<label htmlFor="tags">Tags</label>
			<div className={classes["newpost-tags"]}>
				{tags.map((tag, idx) => {
					let tagClassName = classes[`newpost-tags-${tag}`];
					if (selectedTag === tag) {
						tagClassName += ` ${classes["newpost-tags-selected"]}`;
					}
					return (
						<button
							key={idx}
							className={tagClassName}
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default NewPost;
