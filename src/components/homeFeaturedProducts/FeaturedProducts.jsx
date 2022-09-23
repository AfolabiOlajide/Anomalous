import React from 'react';
import { Link } from 'react-router-dom';

import "./FeaturedProducts.scss"
import Coporate from "../../assets/coporate-wears.png";
import MenCasuals from "../../assets/men-casuals.png";
import WomenCasuals from "../../assets/women-casuals.png";

const FeaturedProducts = () => {
    return (
        <section className="featured-product">
				<div className="container">
					<h1 className="heading">Featured Products</h1>
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
			</section>
    )
}

export default FeaturedProducts