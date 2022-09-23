import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "./index.scss";

import User from "./user";
import Dashboard from "./dashboard";
import LoginDashboard from "./pages/loginDashboard";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="*" element={<User />} />
				<Route path="dashboard" element={<Dashboard />} >
					<Route path="login" element={<LoginDashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
