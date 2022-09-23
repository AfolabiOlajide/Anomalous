import React from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './HomeAbout.scss'
import BagImg from '../../assets/about-bag.png'

const HomeAbout = () => {
    return (
        <section className="about">
				<div className="blue-box"></div>
				<Grid container spacing={4} className="about-box">
					<Grid item sm={6} xs={12} className="img">
						<img src={BagImg} alt="" />
					</Grid>
					<Grid item sm={6} xs={12} className="about-desc">
						<p>About us</p>
						<h2 className="heading">
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
						<Link to="/about">
							<Button>Learn More</Button>
						</Link>
					</Grid>
				</Grid>
			</section>
    )
}

export default HomeAbout