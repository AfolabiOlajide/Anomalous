import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "./index.scss";
// pages import
import HomePage from "./pages/home";
import MarketPlace from "./pages/marketPlace";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import WishList from './pages/wishlist';
import Cart from './pages/cart'
import Profile from "./pages/profile";
import About from "./pages/about"
// components imports
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import NewsLetter from "./components/newsletter/NewsLetter";

function App() {
	return (
		<div className="app">
			<TopBar />
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/marketplace" element={<MarketPlace />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<WishList />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</main>
			<NewsLetter />
			<Footer />
		</div>
	);
}

export default App;
