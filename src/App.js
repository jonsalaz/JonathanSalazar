import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutMe from "./components/AboutMe/AboutMe";

const darkTheme = createTheme( {
  palette: {
    mode: 'dark',
  },
});

function App() {
    var [resume, setResume] = useState(false);
    var [projects, setProjects] = useState(false);
    
    return (
        <Box component="div" sx={{maxHeight: "100vh", overflow: "hidden"}}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline enableColorScheme />
                <Box sx={{ height: "100vh" }}>
                    <Header setResume={setResume} setProjects={setProjects} />
                    {resume || projects ? null : <AboutMe />}
                    {resume ? <Resume /> : null}
                    {projects ? <Projects /> : null}
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default App;
