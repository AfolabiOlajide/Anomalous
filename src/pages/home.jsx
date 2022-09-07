import { Button } from "@mui/material";
import "./home.scss";

const HomePage = () => {
	return (
		<h1 className="home">
			<div className="header">
				<div className="desc">
					<div className="desc-box">
						<h1>An Exclusive yet affordable brand</h1>
						<p>
							Get high quality wears that makes you look unique
							and brings out the model in you
						</p>
						<Button variant="contained" style={{color:'white'}} className="btn">Shop now</Button>
					</div>
				</div>
			</div>
		</h1>
	);
};

export default HomePage;
