import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function Footer() {
    return(
        <Box
            top="100%"
            position="absolute"
            width="100%"
            py={"15px"}
            bgcolor="rgba(0,0,0,0.7)"
            sx={{
                transform: "translateY(-100%)"
            }}
        >
            <Typography
                variant="body2"
                color="primary.contrastText"
                align="center"
            >
                {"Copyright © "}
                <Link color="inherit" href="#">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Box>
    );
}