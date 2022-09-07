import { Button, Grid } from "@mui/material";

import "./home.scss";
import BagImg from "../assets/about-bag.png";

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
							1500s, when an unknown printer took a galley. <br /> <br /> Lorem
							Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a
							galley. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown
							printer took a galley. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley.
						</p>
                        <Button>Learn More</Button>
					</Grid>
				</Grid>
			</div>
		</h1>
	);
};

export default HomePage;
