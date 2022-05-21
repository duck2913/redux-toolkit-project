import React, { useState } from "react";
import "./App.css";
import EditPage from "./components/edit/EditPage";
import Header from "./components/header/Header";

function App() {
	const [isEditing, setIsEditing] = useState<boolean>(false);

	return (
		<div className="App">
			{isEditing && <EditPage />}
			<Header onShowEdit={setIsEditing} />
		</div>
	);
}

export default App;
