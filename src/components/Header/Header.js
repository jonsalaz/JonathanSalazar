import GitHub from "@mui/icons-material/GitHub";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header({ setResume, setProjects }) {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="GitHub"
                        sx={{ mr: 2 }}
                        href="https://github.com/jonsalaz"
                        target="_blank"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="linkden"
                        sx={{ mr: 2 }}
                        href="https://www.linkedin.com/in/jonathan-salazar23"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Jonathan Salazar
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => {
                            setProjects(false);
                            setResume(false);
                        }}
                    >
                        <Typography variant="button">Home</Typography>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => {
                            setResume(false);
                            setProjects(true);
                        }}
                    >
                        <Typography variant="button">Projects</Typography>
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => {
                            setProjects(false);
                            setResume(true);
                        }}
                    >
                        <Typography variant="button">Resume</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;
