import {
    CardActionArea,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";
import { Card } from "@mui/material";

function Project(props) {
    return (
        <Card sx={{ width: "30%" }}>
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    justifyContent: "space-between",
                }}
                href={props.link}
                target="_blank"
            >
                <CardHeader title={props.title} />
                <CardMedia component="img" src={props.image} />
                <CardContent>
                    <Typography variant="caption">{props.desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Project;
