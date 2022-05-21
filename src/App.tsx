import React, { useState } from "react";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Header from "./components/Header/Header";

function App() {
	const [isEditing, setIsEditing] = useState<boolean>(false);

	return (
		<div className="App">
			{isEditing && <EditPage onCloseEdit={setIsEditing} />}
			<Header onShowEdit={setIsEditing} />
		</div>
	);
}

export default App;
