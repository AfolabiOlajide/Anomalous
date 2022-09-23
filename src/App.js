import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "./index.scss";

import User from "./user";
import Admin from "./admin";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="*" element={<User />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
