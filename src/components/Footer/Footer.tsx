import classes from "./Footer.module.css";

interface Props {
	onToggleNewPostModal: () => void;
	isMakingNewPost: boolean;
}

function Footer({ onToggleNewPostModal, isMakingNewPost }: Props) {
	return (
		<footer>
			<p className={classes["footer-title"]} onClick={onToggleNewPostModal}>
				{isMakingNewPost ? "X" : "+"}
			</p>
		</footer>
	);
}

export default Footer;
