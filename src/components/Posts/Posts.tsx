import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import classes from "./Posts.module.css";

function Posts() {
	const posts = useSelector((state: RootState) => state.postSlice.posts);

	return (
		<div className={classes["post-container"]}>
			{posts.map((post, index) => {
				const postTagType = classes[`posts-tags-${post.tag}`];
				return (
					<li className={classes["posts"]} key={index}>
						<div className={classes["posts-title"]}>{post.title}</div>
						<div>{post.description}</div>
						<div className={`${classes["posts-tags"]} ${postTagType}`}>{post.tag}</div>
					</li>
				);
			})}
		</div>
	);
}

export default Posts;
