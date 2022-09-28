import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "./index.scss";

import User from "./user";
import Dashboard from "./dashboard";
import LoginDashboard from "./pages/loginDashboard";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import MarketPlace from "./pages/marketPlace";
import Cart from "./pages/cart";
import WishList from "./pages/wishlist";
import Profile from "./pages/profile";

function App() {
	return (
		<div className="app">
			<Routes>
				{/* normal site routes */}
				<Route path="*" element={<User />} />
				{/* routes relavant to shop */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/marketplace" element={<MarketPlace />} />
				<Route path="cart" element={<Cart />} />
				<Route path="/wishlist" element={<WishList />} />
				<Route path="/profile" element={<Profile />} />
				{/* dashboard routes */}
				<Route path="dashboard" element={<Dashboard />} >
					<Route path="login" element={<LoginDashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
