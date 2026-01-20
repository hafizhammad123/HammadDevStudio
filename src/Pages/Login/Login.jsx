import React from "react";
import {
    Box,
    Container,
    Typography,
    Stack,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();    
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #11acffff 0%, #312e81 50%, #11acffff 100%)",
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    component={motion.div}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    elevation={0}
                    sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: "18px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                    }}
                >
                    <Stack spacing={3}>
                        {/* HEADER */}
                        <Stack spacing={1} textAlign="center">
                            <Typography
                                sx={{
                                    fontSize: { xs: 22, sm: 26 },
                                    fontWeight: 800,
                                }}
                            >
                                Student Login
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
                                Login using your Roll Number
                            </Typography>
                        </Stack>

                        {/* FORM */}
                        <Stack spacing={2.5}>
                            <TextField
                                fullWidth
                                label="Roll Number"
                                placeholder="e.g. HDS-1023"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                            />
                        </Stack>

                        {/* LOGIN BUTTON */}
                        <Button
                            component={motion.button}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 1,
                                py: 1.3,
                                borderRadius: "14px",
                                fontSize: 15,
                                fontWeight: 700,
                            }}
                        >
                            Login
                        </Button>

                        {/* FOOTER LINKS */}
                        <Stack spacing={1} textAlign="center">
                            <Typography sx={{ fontSize: 13 }}>
                                Forgot password?{" "}
                                <span style={{ color: "#2563eb", cursor: "pointer" }}>
                                    Contact Admin
                                </span>
                            </Typography>
                            <Typography sx={{ fontSize: 13 }}>
                                Go to Home?{" "}
                                <span onClick={() => navigate("/")} style={{ color: "#2563eb", cursor: "pointer" }}>
                                    Home
                                </span>
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    color: "text.secondary",
                                }}
                            >
                                © Hammad Dev Studio
                            </Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;
