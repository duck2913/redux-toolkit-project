import React, { useState } from "react";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";

function App() {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isMakingNewPost, setIsMakingNewPost] = useState(false);

	function toggleNewPostModalHandler() {
		setIsMakingNewPost((currState) => !currState);
	}

	return (
		<div className="App">
			{isEditing && <EditPage onCloseEdit={setIsEditing} />}
			<Header onShowEdit={setIsEditing} />
			{isMakingNewPost && <NewPost onSaveNewPost={toggleNewPostModalHandler} />}
			<Posts />
			<Footer
				onToggleNewPostModal={toggleNewPostModalHandler}
				isMakingNewPost={isMakingNewPost}
			/>
		</div>
	);
}

export default App;
