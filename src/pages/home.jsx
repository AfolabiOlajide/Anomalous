import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./home.scss";
import BagImg from "../assets/about-bag.png";
import Coporate from "../assets/coporate-wears.png";
import MenCasuals from "../assets/men-casuals.png";
import WomenCasuals from "../assets/women-casuals.png";

const HomePage = () => {
	return (
		<h1 className="home">
			{/* header */}
			<div className="header">
				<div className="desc">
					<div className="desc-box">
						<h1>An Exclusive yet affordable brand</h1>
						<p>
							Get high quality wears that makes you look unique
							and brings out the model in you
						</p>
						<Button
							variant="contained"
							style={{ color: "white" }}
							className="btn"
						>
							Shop now
						</Button>
					</div>
				</div>
			</div>

			{/* about */}
			<div className="about">
				<div className="blue-box"></div>
				<Grid container spacing={4} className="about-box">
					<Grid item sm={6} xs={12} className="img">
						<img src={BagImg} alt="" />
					</Grid>
					<Grid item sm={6} xs={12} className="about-desc">
						<p>About us</p>
						<h2>
							Looking for the right out fit for any event? We are
							here for you!
						</h2>
						<p>
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer
							took a galley. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley. Lorem Ipsum has been
							the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley. <br />{" "}
							<br /> Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown
							printer took a galley. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley. Lorem Ipsum
							has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a
							galley.
						</p>
						<Button>Learn More</Button>
					</Grid>
				</Grid>
			</div>

			{/* featured product */}
			<div className="featured-product">
				<div className="container">
					<h1>Featured Products</h1>
					<div className="featured-items">
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={MenCasuals}
									alt=""
								/>
								<div className="desc">Men Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={WomenCasuals}
									alt=""
								/>
								<div className="desc">Women Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={Coporate}
									alt=""
								/>
								<div className="desc">Coporate Wears</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={MenCasuals}
									alt=""
								/>
								<div className="desc">Men Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={WomenCasuals}
									alt=""
								/>
								<div className="desc">Women Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={Coporate}
									alt=""
								/>
								<div className="desc">Coporate wears</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</h1>
	);
};

export default HomePage;
