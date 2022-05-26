import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "./banner.jpg";
import useWindowDimensions from "./windowDimensions";

function AboutMe() {
    const { height, width } = useWindowDimensions();

    var image;
    if (width / height > 1920 / 1080) {
        image = (
            <Box
                component="img"
                src={banner}
                sx={{
                    height: "auto",
                    maxWidth: "100vw",
                }}
                alt="Banner"
            />
        );
    } else {
        image = (
            <Box
                component="img"
                src={banner}
                sx={{
                    maxHeight: "100vh",
                    width: "auto",
                }}
                alt="Banner"
            />
        );
    }

    return (
        <Paper elevation={24} sx={{ minHeight: "100%" }}>
            <Box component="div" sx={{ minHeight: "100%" }}>
                {image}
                <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        maxWidth: "425px",
                        left: "10%",
                        top: "10%",
                    }}
                >
                    <Typography variant="h1">About Me</Typography>
                    <Typography variant="body1">
                        My name is Jonathan Salazar. I am currently pursuing a
                        B.S. in Computer Science from the University of New
                        Mexico. I am currently located in Albuquerque, New
                        Mexico, but I have hopes to move in order to broaden my
                        experience with the world. I specialize in web
                        development and java development, but have further
                        interests outside of these two fields as well. Outside
                        of the Computer Science field I find myself actively
                        learning Japanese, acting, and performing music. And, of
                        course, I love dogs.
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}

export default AboutMe;
