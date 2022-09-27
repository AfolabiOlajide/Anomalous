import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, IconButton, TextField, Button, Box } from "@mui/material";
import React from "react";

import logo from "../../assets/small-logo.png";
import "./NavBar.scss";
import { Close, MenuSharp } from "@mui/icons-material";

const NavBar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggler() {
		setIsNavOpen(!isNavOpen);
	}

	return (
		<div className="navbar">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="Anomalous fashion logo" />
				</Link>
			</div>
			<div className="navbar-menu">
				<Tabs aria-label="nav tabs example" textColor="#FFF">
					<Link to="/">
						<Tab label="Home" className="navbar-link" />
					</Link>
					<Link to="/marketplace">
						<Tab label="MarketPlace" className="navbar-link" />
					</Link>
					<Link to="/blog">
						<Tab label="Blog" className="navbar-link" />
					</Link>
					<Link to="/contact">
						<Tab label="Contact Us" className="navbar-link" />
					</Link>
				</Tabs>
				<Link to="/login">
					<Button variant="contained">Login</Button>
				</Link>
				<Link to="/signup">
					<Button variant="outlined">Sign Up</Button>
				</Link>
			</div>
			<div className="mobile-nav">
				<IconButton>
					<MenuSharp className="mobile-nav-icon" onClick={toggler} />
				</IconButton>
			</div>

			<div className={`mobile-navbar ${isNavOpen ? "active" : ""}`}>
				<div className="close-btn">
					<IconButton>
						<Close onClick={toggler} />
					</IconButton>
				</div>

				<div className="search">
					<TextField
						id="outlined-basic"
						label="Search Wears"
						variant="outlined"
						sx={{ width: "100%" }}
					/>
				</div>

				<div className={`nav-menu`}>
					<Link to="/" className="item" onClick={toggler}>
						Home
					</Link>
					<Link to="/marketplace" className="item" onClick={toggler}>
						MarketPlace
					</Link>
					<Link to="/blog" className="item" onClick={toggler}>
						Blog
					</Link>
					<Link to="contact" className="item" onClick={toggler}>
						Contact Us
					</Link>
					<Link to="/profile" className="item" onClick={toggler}>
						Profile
					</Link>
					<Link to="/cart" className="item" onClick={toggler}>
						Cart
					</Link>
				</div>

				<div className="cta">
					<Box sx={{ marginBottom: "1rem" }}>
						<Link to="/login">
							<Button
								variant="contained"
								sx={{ width: "100%" }}
								onClick={toggler}
							>
								Log In
							</Button>
						</Link>
					</Box>
					<Box>
						<Link to="/signup">
							<Button
								variant="text"
								sx={{
									width: "100%",
									background: "rgb(247, 244, 244)",
								}}
								onClick={toggler}
							>
								Sign Up
							</Button>
						</Link>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
