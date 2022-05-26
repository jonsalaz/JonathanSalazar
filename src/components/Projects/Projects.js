import React from "react";
import Project from "./Project/Project.js";
import ScrabbleImage from "./Project/GitHubImages/ScrabbleImage.png";
import AuctionHouse from "./Project/GitHubImages/AuctionHouse.png";
import ReactLogo from "../../logo.svg";
import { Grid } from "@mui/material";

function Projects() {
    return (
        <Grid
            container
            mt={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
        >
            <Project
                title="Scrabble GUI"
                image={ScrabbleImage}
                link="https://github.com/jonsalaz/JavaFX-Scrabble"
                desc="Demonstration of algorithmic solver to determine the best move possible of any given hand in a game of Scrabble."
            />
            <Project
                title="Auction House"
                image={AuctionHouse}
                link="https://github.com/jonsalaz/Auction-House"
                desc="Terminal Based Auction House using Java Sockets to communicate between the bank, the Auction House, and an Agent."
            />
            <Project
                title="Personal Website"
                image={ReactLogo}
                link="https://github.com/jonsalaz/personalwebsite"
                desc="React based website to showcase my projects and skillset."
            />
        </Grid>
    );
}

export default Projects;
