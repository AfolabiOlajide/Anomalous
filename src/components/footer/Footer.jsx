import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom"
import React from "react";

import logo from "../../assets/main-logo.png";
import "./Footer.scss";

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<div className="footer">
			<Grid container spacing={5}>
				<Grid item xs={12} sm={5} className="footer-about">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<div className="desc">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Iusto eligendi unde rem exercitationem maiores
							vitae fugit neque culpa odit saepe.
							elit. Iusto eligendi unde rem exercitationem maiores
							vitae fugit neque culpa odit saepe.
						</p>
					</div>
				</Grid>
				<Grid xs={12} sm={7} item className="more-links">
					<Grid container>
						<Grid item xs={12} sm={4} className="items">
							<h3>Services</h3>
							<Link to="">Financial consulting</Link>
							<Link to="">Human Resources</Link>
							<Link to="">Business Plan</Link>
						</Grid>
						<Grid item xs={12} sm={4} className="items">
							<h3>Company</h3>
							<Link to="">About Us</Link>
							<Link to="">Our Services</Link>
							<Link to="">Contact Us</Link>
						</Grid>
						<Grid item xs={12} sm={4} className="items">
							<h3>Support</h3>
							<Link to="">Privacy Policy</Link>
							<Link to="">Terms of Service</Link>
							<Link to="">Code of Consuct</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Box className={`all-rights`}>
				<span>All rights Reserved Anomalous {year}</span>
			</Box>
		</div>
	);
};

export default Footer;
