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
import { Footer, Navbar } from "../../Cmp";
import Layout from "../../Cmp/Layout";

const EnrollNow = () => {
    return (
        <Layout>
   
            <Box
                sx={{
                    py: { xs: "60px", md: "100px" },
                    background:
                        "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        elevation={0}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        sx={{
                            p: { xs: 3, sm: 4 },
                            borderRadius: "20px",
                            border: "1px solid #e5e7eb",
                        }}
                    >
                        <Stack spacing={3}>
                            {/* HEADER */}
                            <Stack spacing={1} textAlign="center">
                                <Typography
                                    sx={{
                                        fontSize: { xs: 24, sm: 28 },
                                        fontWeight: 900,
                                    }}
                                >
                                    Enroll Now
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "text.secondary",
                                    }}
                                >
                                    Start your professional IT journey with Hammad Dev Studio
                                </Typography>
                            </Stack>

                            {/* FORM */}
                            <Stack spacing={2.2}>
                                <TextField fullWidth label="Full Name" />

                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                />

                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    placeholder="+92 3XX XXXXXXX"
                                />

                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />

                                <TextField
                                    fullWidth
                                    label="Qualification"
                                    placeholder="Matric / Inter / Graduation"
                                />

                                {/* IMAGE UPLOAD */}
                                <Stack spacing={1}>
                                    <Typography fontSize="13px" fontWeight={600}>
                                        Upload Your Image
                                    </Typography>
                                    <Button
                                        component="label"
                                        variant="outlined"
                                        sx={{ borderStyle: "dashed" }}
                                    >
                                        Upload Student Image
                                        <input type="file" hidden accept="image/*" />
                                    </Button>
                                </Stack>

                                {/* FEE SCREENSHOT */}
                                <Stack spacing={1}>
                                    <Typography fontSize="13px" fontWeight={600}>
                                        Fee Screenshot
                                    </Typography>
                                    <Button
                                        component="label"
                                        variant="outlined"
                                        sx={{ borderStyle: "dashed" }}
                                    >
                                        Upload Fee Screenshot
                                        <input type="file" hidden accept="image/*" />
                                    </Button>
                                </Stack>
                            </Stack>

                            {/* SUBMIT */}
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                variant="contained"
                                size="large"
                                sx={{
                                    py: "12px",
                                    borderRadius: "14px",
                                    fontWeight: 700,
                                    fontSize: "15px",
                                }}
                            >
                                Submit Enrollment
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
      
        </Layout>

    );
};

export default EnrollNow;
