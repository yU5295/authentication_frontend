import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "../assets/imgs/background.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Hellou
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export default function Home() {
    const [width, setWidth] = useState(getWindowDimensions().width);
    const [height, setHeight] = useState(getWindowDimensions().height);
    return (
        <Box position="relative">
            <Header />
            <Box
                height="1009px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    bgcolor: "primary.main",
                }}
            >
                <Box
                    component={"h1"}
                    textAlign="center"
                    fontSize={{ md: "70px", xs: "45px"}}
                    color={"primary.contrastText"}
                >
                    Welcome to our website!
                </Box>
            </Box>
            <Footer />
        </Box>
        
    );
}