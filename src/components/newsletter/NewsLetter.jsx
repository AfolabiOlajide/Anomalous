import { ChevronRightSharp } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React from "react";

import "./NewsLetter.scss";
import dotted from "../../assets/dotted-box.png";

const NewsLetter = () => {
	return (
		<div className={`newsletter-container`}>
			<div className="blue-box"></div>
			<Paper elevation={3} className="newsletter">
				<div className="text">
					<p>Subscribe to our News Letter</p>
					<h1>Let us send you an offering</h1>
					<p>
						Get to Know more about us and never miss any update on a
						new Product
					</p>
				</div>
				<div className="cta">
					<input
						type="email"
						placeholder="Enter Your E-mail"
						required
					/>
					<button className="btn">
						<ChevronRightSharp />
					</button>
				</div>
                <div className="dotted2"><img src={dotted} alt="" /></div>
                <div className="dotted3"><img src={dotted} alt="" /></div>
			</Paper>
			<div className="dotted1"><img src={dotted} alt="" /></div>
		</div>
	);
};

export default NewsLetter;
