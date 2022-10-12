import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Box
            position="absolute"
            width="100%"
            py={"20px"}
            bgcolor="rgba(0,0,0,0.5)"
        >
            <Container maxWidth="xl">
                <CssBaseline />
                <Box
                    display="flex"
                    justifyContent="space-between"
                    color="primary.contrastText"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        Logo
                    </Box>
                    <Box>
                        <Button component={Link} to="/signin" variant="contained" color="primary" sx={{mx: "10px"}}>
                            Sign in
                        </Button>
                        <Button component={Link} to="/signup" variant="contained" color="primary" >
                            Sign up
                        </Button>
                        
                    </Box>
                </Box>    
            </Container>
        </Box>
    );
}