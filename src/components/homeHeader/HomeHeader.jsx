import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./HomeHeader.scss";

const HomeHeader = () => {
    return (
        <section className="header">
        <div className="desc">
            <div className="desc-box">
            <h1 className="heading">An Exclusive yet affordable brand</h1>
            <p>
                Get high quality wears that makes you look unique and brings out the
                model in you
            </p>
            <Link to="/marketplace">
                <Button
                variant="contained"
                style={{ color: "white" }}
                className="btn"
                >
                Shop now
                </Button>
            </Link>
            </div>
        </div>
        </section>
    );
};

export default HomeHeader;
