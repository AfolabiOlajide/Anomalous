import { Routes, Route } from "react-router-dom";

import "./app.scss";
import "./index.scss";
// pages import
import HomePage from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about"
// components imports
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import NewsLetter from "./components/newsletter/NewsLetter";

function User() {
	return (
		<div className="user">
			<TopBar />
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<NewsLetter />
			<Footer />
		</div>
	);
}

export default User;
